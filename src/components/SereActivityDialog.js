import React, { useEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from '@material-ui/core';
import {
  TextInput,
  ConstantBasedPicker,
  formatMessage,
} from '@openimis/fe-core';
import {
  ACTIVITY_STATUSES,
  ACTIVITY_STATUS_PLANNED,
  MODULE_NAME,
} from '../constants';

function normalizeActivityForDialog(activity) {
  if (!activity) return { status: ACTIVITY_STATUS_PLANNED };

  const rawStatus = activity.status ?? activity.activity_status;
  const statusUpper = rawStatus ? String(rawStatus).toUpperCase() : ACTIVITY_STATUS_PLANNED;
  const status = ACTIVITY_STATUSES.includes(statusUpper) ? statusUpper : ACTIVITY_STATUS_PLANNED;

  const rawDate = activity.activityDate ?? activity.activity_date;
  const activityDate = rawDate ? String(rawDate).split('T')[0] : '';

  return {
    ...activity,
    status,
    activityDate,
  };
}

function SereActivityDialog({
  intl,
  open,
  activity,
  onClose,
  onSave,
}) {
  const [editedActivity, setEditedActivity] = useState({});

  useEffect(() => {
    if (open) {
      setEditedActivity(normalizeActivityForDialog(activity));
    }
  }, [activity, open]);

  const updateField = (field, value) => {
    setEditedActivity((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const canSave = () => !!editedActivity.title?.trim() && !!editedActivity.status;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {formatMessage(
          intl,
          MODULE_NAME,
          editedActivity?.id ? 'sereActivity.dialog.editTitle' : 'sereActivity.dialog.createTitle',
        )}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              module={MODULE_NAME}
              label="sereActivity.title"
              value={editedActivity.title ?? ''}
              onChange={(value) => updateField('title', value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              module={MODULE_NAME}
              label="sereActivity.description"
              value={editedActivity.description ?? ''}
              onChange={(value) => updateField('description', value)}
              multiline
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              module={MODULE_NAME}
              label="sereActivity.activityDate"
              type="date"
              value={editedActivity.activityDate ?? ''}
              onChange={(value) => updateField('activityDate', value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ConstantBasedPicker
              module={MODULE_NAME}
              label="sereActivity.status"
              value={editedActivity.status ?? ACTIVITY_STATUS_PLANNED}
              onChange={(value) => updateField('status', value)}
              constants={ACTIVITY_STATUSES}
              withNull={false}
              required
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          {formatMessage(intl, MODULE_NAME, 'sereActivity.dialog.cancel')}
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!canSave()}
          onClick={() => onSave(editedActivity)}
        >
          {formatMessage(intl, MODULE_NAME, 'sereActivity.dialog.save')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default injectIntl(SereActivityDialog);
