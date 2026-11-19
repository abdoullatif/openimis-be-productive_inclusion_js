import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import {
  apiHeaders,
  baseApiUrl,
  formatMessage,
} from '@openimis/fe-core';
import {
  MODULE_NAME,
  RIGHT_SERE_PRESENCE_VALIDATE,
} from '../constants';

const VALIDATE_PRESENCES_URL = `${baseApiUrl}/productive_inclusion/validate_presences/`;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(2),
  },
}));

function t(intl, key) {
  return formatMessage(intl, MODULE_NAME, key);
}

function SereValidatePresencesButton({ intl, rights }) {
  const classes = useStyles();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inlineError, setInlineError] = useState(null);
  const [result, setResult] = useState(null);

  if (!rights.includes(RIGHT_SERE_PRESENCE_VALIDATE)) {
    return null;
  }

  const closeConfirm = () => {
    if (loading) return;
    setConfirmOpen(false);
  };

  const onConfirm = async () => {
    setLoading(true);
    setInlineError(null);
    try {
      const headers = { ...(apiHeaders || {}) };
      delete headers['Content-Type'];
      delete headers['content-type'];

      const response = await fetch(VALIDATE_PRESENCES_URL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          ...headers,
          Accept: 'application/json',
        },
      });
      const payload = await response.json().catch(() => ({}));

      if (response.status === 403) {
        setLoading(false);
        setConfirmOpen(false);
        setInlineError(t(intl, 'validatePresences.forbidden'));
        return;
      }

      if (!response.ok || payload.success === false) {
        const message = payload.error || payload.detail || t(intl, 'validatePresences.failed');
        setLoading(false);
        setConfirmOpen(false);
        setInlineError(typeof message === 'string' ? message : JSON.stringify(message));
        return;
      }

      setLoading(false);
      setConfirmOpen(false);
      setResult({
        membersTotal: payload.members_total ?? 0,
        activeCount: payload.active_count ?? 0,
        inactiveCount: payload.inactive_count ?? 0,
        membersStatusUpdated: payload.members_status_updated ?? 0,
        benefitPlanCode: payload.benefit_plan_code || null,
        taskId: payload.task_id || null,
      });
    } catch (error) {
      setLoading(false);
      setConfirmOpen(false);
      setInlineError(error?.message || t(intl, 'validatePresences.failed'));
    }
  };

  return (
    <>
      <Box className={classes.toolbar}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setInlineError(null);
            setConfirmOpen(true);
          }}
          disabled={loading}
        >
          {t(intl, 'validatePresences.btn')}
        </Button>
      </Box>
      {inlineError && (
        <Box mb={2}>
          <Alert severity="error">{inlineError}</Alert>
        </Box>
      )}

      <Dialog open={confirmOpen} onClose={closeConfirm} fullWidth maxWidth="sm">
        <DialogTitle>{t(intl, 'validatePresences.confirmTitle')}</DialogTitle>
        <DialogContent>
          <Alert severity="info">{t(intl, 'validatePresences.confirmMessage')}</Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirm} disabled={loading}>
            {t(intl, 'validatePresences.cancel')}
          </Button>
          <Button
            onClick={onConfirm}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading
              ? t(intl, 'validatePresences.inProgress')
              : t(intl, 'validatePresences.confirm')}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!!result} onClose={() => setResult(null)} fullWidth maxWidth="sm">
        <DialogTitle>{t(intl, 'validatePresences.confirmTitle')}</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>{t(intl, 'validatePresences.success')}</Typography>
          {result && (
            <ul>
              <li>
                {t(intl, 'validatePresences.membersTotal')}
                :
                {' '}
                {result.membersTotal}
              </li>
              <li>
                {t(intl, 'validatePresences.activeCount')}
                :
                {' '}
                {result.activeCount}
              </li>
              <li>
                {t(intl, 'validatePresences.inactiveCount')}
                :
                {' '}
                {result.inactiveCount}
              </li>
              <li>
                {t(intl, 'validatePresences.statusUpdated')}
                :
                {' '}
                {result.membersStatusUpdated}
              </li>
              {result.benefitPlanCode && (
                <li>
                  {t(intl, 'validatePresences.benefitPlan')}
                  :
                  {' '}
                  {result.benefitPlanCode}
                </li>
              )}
              {result.taskId && (
                <li>
                  {t(intl, 'validatePresences.taskId')}
                  :
                  {' '}
                  {result.taskId}
                </li>
              )}
            </ul>
          )}
          <Alert severity="info">{t(intl, 'validatePresences.taskHint')}</Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResult(null)} variant="contained" color="primary">
            {t(intl, 'validatePresences.ok')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
});

export default injectIntl(connect(mapStateToProps)(SereValidatePresencesButton));
