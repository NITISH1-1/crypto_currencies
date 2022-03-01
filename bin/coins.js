#!/usr/bin/env node

import { version } from 'commander';
import { version as _version } from '../package.json';

version(_version)
.command('key', 'Manage API Key -- https://nomics.com')
.parse(process.argv);
