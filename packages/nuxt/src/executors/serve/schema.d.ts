import { LoadNuxtConfigOptions } from '@nuxt/kit';

// TODO: Need to verify which options should be made available to the executor
export interface NuxtServeOptions
  extends Pick<LoadNuxtConfigOptions['overrides'], 'debug' | 'dev' | 'ssr'> {
  host?: string;
  port?: number;
}
