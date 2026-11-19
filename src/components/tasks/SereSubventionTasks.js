import React from 'react';
import SereSubventionTaskRecap from './SereSubventionTaskRecap';

const SereSubventionTaskTableHeaders = () => [
  'Récapitulatif subvention',
];

const SereSubventionTaskItemFormatters = () => [
  (incomingData) => (
    <SereSubventionTaskRecap incomingData={incomingData} />
  ),
];

export { SereSubventionTaskTableHeaders, SereSubventionTaskItemFormatters };
