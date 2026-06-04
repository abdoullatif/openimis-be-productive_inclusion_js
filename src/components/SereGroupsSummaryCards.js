import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { formatMessage } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    height: '100%',
  },
  prefectureList: {
    maxHeight: 160,
    overflowY: 'auto',
    marginTop: theme.spacing(1),
  },
  prefectureRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0.5, 0),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

function displayCount(value) {
  if (value === null || value === undefined || value === '') return '—';
  const n = Number(value);
  return Number.isNaN(n) ? String(value) : n;
}

function SereGroupsSummaryCards({
  intl,
  fetchingSereGroupsSummary,
  sereGroupsSummary,
  sereGroupsTotalCount,
}) {
  const classes = useStyles();

  const totalGroups = sereGroupsSummary?.totalGroups ?? sereGroupsTotalCount;
  const totalMembers = sereGroupsSummary?.totalMembers;
  const byPrefecture = sereGroupsSummary?.groupsByPrefecture ?? [];

  return (
    <Grid container spacing={2} style={{ marginBottom: 16 }}>
      <Grid item xs={12} md={4}>
        <Paper elevation={2} className={classes.card}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {formatMessage(intl, MODULE_NAME, 'sereGroups.summary.totalGroups')}
          </Typography>
          {fetchingSereGroupsSummary ? (
            <CircularProgress size={24} />
          ) : (
            <Typography variant="h4">{displayCount(totalGroups)}</Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={2} className={classes.card}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {formatMessage(intl, MODULE_NAME, 'sereGroups.summary.totalMembers')}
          </Typography>
          {fetchingSereGroupsSummary ? (
            <CircularProgress size={24} />
          ) : (
            <Typography variant="h4">{displayCount(totalMembers)}</Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={2} className={classes.card}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {formatMessage(intl, MODULE_NAME, 'sereGroups.summary.byPrefecture')}
          </Typography>
          {fetchingSereGroupsSummary ? (
            <CircularProgress size={24} />
          ) : byPrefecture.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              {formatMessage(intl, MODULE_NAME, 'sereGroups.summary.noPrefectureData')}
            </Typography>
          ) : (
            <Box className={classes.prefectureList}>
              {byPrefecture.map((row) => (
                <div key={row.label} className={classes.prefectureRow}>
                  <Typography variant="body2">{row.label}</Typography>
                  <Typography variant="body2">
                    <strong>{row.count}</strong>
                  </Typography>
                </div>
              ))}
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  fetchingSereGroupsSummary: state.productiveInclusion?.fetchingSereGroupsSummary,
  sereGroupsSummary: state.productiveInclusion?.sereGroupsSummary,
  sereGroupsTotalCount: state.productiveInclusion?.sereGroupsTotalCount ?? 0,
});

export default injectIntl(connect(mapStateToProps)(SereGroupsSummaryCards));
