import { DayHeaderContentArg } from '../render-hook-misc.js'

export const CLASS_NAME = 'fc-col-header-cell' // do the cushion too? no

export function renderInner(hookProps: DayHeaderContentArg) {
  return hookProps.text
}
