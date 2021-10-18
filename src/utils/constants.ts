export type IModelName = 'cms' | 'mac';

const modelPrefix = `${process.env.PUBLIC_URL}/assets/models/`;
export const modelUrlMaps: {[key in IModelName]: string} = {
  mac: 'mac.glb',
  cms: '01_contents-management-system.glb',
};

export const getModelPath = (modelName: IModelName) => {
  return `${modelPrefix}${modelUrlMaps[modelName]}`;
}