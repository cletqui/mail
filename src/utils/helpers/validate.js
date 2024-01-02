import { allowedEmailMimeTypes } from "../constants/allowed";

/**
 * Validates the selected input file.
 * @function @name validateInputFile
 * @param {FileList} files - The selected input file.
 * @returns {boolean} True if the file pass the validation; otherwise, false.
 */
export const validateInputFile = (file) => {
  return allowedEmailMimeTypes.includes(file?.type);
};
