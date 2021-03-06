/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { FileUploadPlugin } from './plugin';

export function plugin() {
  return new FileUploadPlugin();
}

export * from '../common';

export * from './importer/types';

export { FileUploadPluginStart } from './plugin';
export { FileUploadComponentProps } from './lazy_load_bundle';
