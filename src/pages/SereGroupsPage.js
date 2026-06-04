import React from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import SereGroupSearcher from '../components/SereGroupSearcher';

const styles = (theme) => ({
  page: theme.page,
});

function SereGroupsPage({ classes }) {
  return (
    <div className={classes.page}>
      <SereGroupSearcher />
    </div>
  );
}

export default withTheme(withStyles(styles)(SereGroupsPage));
