// eslint-disable-next-line import/no-extraneous-dependencies
import { collect } from 'astro-content';
import type { FileInstance, Options } from 'astro-content';
import type { Entities } from '../.astro-content/types';

const get = collect as (
  pFiles: Promise<FileInstance[]>,
  options?: Options,
) => Promise<Entities>;

export { get };
export * from "../.astro-content/types";
