import React from 'react';
import { withTheme, withStyles } from '@material-ui/core/styles';
import SereMemberListSearcher from '../components/SereMemberListSearcher';

const styles = (theme) => ({
  page: theme.page,
});

function SereMembersPage({ classes }) {
  return (
    <div className={classes.page}>
      <SereMemberListSearcher />
    </div>
  );
}

export default withTheme(withStyles(styles)(SereMembersPage));
