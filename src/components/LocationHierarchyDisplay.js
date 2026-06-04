import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { formatMessage } from '@openimis/fe-core';
import { MODULE_NAME } from '../constants';
import { parseLocationHierarchy, HIERARCHY_LEVELS, formatLevelValue } from '../util/locationHierarchy';

/**
 * Renders administrative levels from `locationHierarchy` JSON with business labels
 * (District = village/V, Sous-préfecture = ward/W, …). Never shows raw V/W/D/R.
 */
export default function LocationHierarchyDisplay({ intl, hierarchy: hierarchyProp, compact }) {
  const hierarchy = parseLocationHierarchy(hierarchyProp);
  const variant = compact ? 'caption' : 'body2';
  const dash = '—';

  if (!hierarchy) {
    return (
      <Typography variant={variant} color="textSecondary" component="span">
        {formatMessage(intl, MODULE_NAME, 'locationHierarchy.notSet')}
      </Typography>
    );
  }

  return (
    <Box component="div">
      {HIERARCHY_LEVELS.map(({ jsonKey, labelKey }) => {
        const node = hierarchy[jsonKey];
        const value = formatLevelValue(node);
        const display = value ?? dash;
        return (
          <Typography key={jsonKey} variant={variant} display="block" component="div">
            <strong>{formatMessage(intl, MODULE_NAME, labelKey)}</strong>
            {': '}
            {display}
          </Typography>
        );
      })}
    </Box>
  );
}
