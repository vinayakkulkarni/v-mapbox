import { URL } from 'node:url';
import { Blob } from 'buffer';

// @ts-ignore
globalThis.URL = URL;
// https://github.com/vitest-dev/vitest/issues/1377#issuecomment-1141411249
// @ts-ignore
globalThis.Blob = Blob;
