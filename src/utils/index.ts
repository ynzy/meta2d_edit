/**
 * 打开文件系统上传文件
 * @returns
 */
export const openFileUpload = () => {
  return new Promise<any>((resolve) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', () => {
      // @ts-ignore
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (event: any) {
          resolve(event.target?.result);
        };
        reader.readAsText(selectedFile);
      }
      document.body.removeChild(fileInput);
    });

    document.body.appendChild(fileInput);
    fileInput.click();
  });
};

/**
 * 合并更新数据
 * @param target 目标数据
 * @param resource 源数据
 */
export function mergeProps(target: any, resource: any) {
  for (const i in target) {
    if (resource[i]) {
      target[i] = resource[i];
    } else {
      target[i] = resource.calculative?.[i];
    }
    if (!target[i]) {
      switch (typeof target[i]) {
        case 'string':
          target[i] = '';
          break;
        case 'number':
          target[i] = 0;
          break;
        case 'boolean':
          target[i] = false;
          break;
      }
    }
  }
}
