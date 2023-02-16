//https://gist.github.com/RienNeVaPlus/024de3431ae95546d60f2acce128a7e2

export const dateDiffDefinitionX = Object.freeze({
  millennium: 31536000000000,
  century: 3153600000000,
  decade: 315360000000,
  year: 31536000000,
  quarter: 7776000000,
  month: 2592000000,
  week: 604800000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
  millisecond: 1,
});

export const hhMMssDefinition = Object.freeze({
  hour: 3600000,
  minute: 60000,
  second: 1000,
});

export const inMinutesDefinition = Object.freeze({
  minute: 60000,
});

export type DateDiffKey = keyof typeof inMinutesDefinition;
export type DateDifference = Record<DateDiffKey, number>;

export const dateDiffKeys = Object.freeze(
  Object.keys(inMinutesDefinition),
) as DateDiffKey[];

function dateDiff(
  dateStart: Date,
  dateEnd: Date | string = new Date(),
): DateDifference {
  if (typeof dateEnd === 'string') {
    dateEnd = new Date();
  }

  let delta: number = Math.abs(dateStart.getTime() - dateEnd.getTime());

  return dateDiffKeys.reduce<DateDifference>(
    (res: DateDifference, key: DateDiffKey) => {
      res[key] = Math.floor(delta / inMinutesDefinition[key]);
      delta -= res[key] * inMinutesDefinition[key];
      return res;
    },
    {} as DateDifference,
  );
}

export default dateDiff;
