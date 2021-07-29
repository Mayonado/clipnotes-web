/**
 * This is helper for object deep cloning
 * @param {oldObject} - old object that will be update
 * @param {updatedProperties} - Updated value for each the property
 */
export const updateObject = (oldObject: Object, updatedProperties: Object) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
