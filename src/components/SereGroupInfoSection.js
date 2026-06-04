import React from 'react';
import { injectIntl } from 'react-intl';
import {
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core/styles';
import { formatMessage } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import LocationHierarchyDisplay from './LocationHierarchyDisplay';

const styles = (theme) => ({
  paper: theme.paper.paper,
  paperHeader: theme.paper.header,
  item: theme.paper.item,
});

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '—';
  return value;
}

function SereGroupInfoSection({
  intl,
  classes,
  sereGroup,
  onBack,
}) {
  return (
    <Paper className={classes.paper}>
      <Grid container alignItems="center" direction="row" className={classes.paperHeader}>
        <Grid item>
          <IconButton onClick={onBack} aria-label="back">
            <ChevronLeftIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {formatMessage(intl, MODULE_NAME, 'sereGroup.infoSectionTitle')}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} className={classes.item}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle2" color="textSecondary">
            {formatMessage(intl, MODULE_NAME, 'sereGroup.code')}
          </Typography>
          <Typography>{displayValue(sereGroup.importCode)}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle2" color="textSecondary">
            {formatMessage(intl, MODULE_NAME, 'sereGroup.name')}
          </Typography>
          <Typography>{displayValue(sereGroup.name)}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle2" color="textSecondary">
            {formatMessage(intl, MODULE_NAME, 'sereGroup.locality')}
          </Typography>
          <Typography>{displayValue(sereGroup.locality)}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {formatMessage(intl, MODULE_NAME, 'sereGroup.administrativeLevels')}
          </Typography>
          <LocationHierarchyDisplay intl={intl} hierarchy={sereGroup.locationHierarchy} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default injectIntl(withStyles(styles)(SereGroupInfoSection));
