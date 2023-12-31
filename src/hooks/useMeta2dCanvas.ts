import { Meta2d } from '@meta2d/core';
import type { Options } from '@meta2d/core';
import { flowPens } from '@meta2d/flow-diagram'; // 流程图
import { activityDiagram, activityDiagramByCtx } from '@meta2d/activity-diagram'; // 活动图
import { sequencePens, sequencePensbyCtx } from '@meta2d/sequence-diagram'; // 时序图
import { classPens } from '@meta2d/class-diagram'; // 类图
import { formPens } from '@meta2d/form-diagram'; // 表单
import { register as registerEcharts, registerHighcharts, registerLightningChart } from '@meta2d/chart-diagram'; // 引入echarts注册函数，原函数名为register 为了与其他注册函数区分这里重命名为registerEcharts

//@ts-ignore
import { myTriangle, myTriangleAnchors } from '../../public/meta2dImages/path2D/mypath2d/myTriangle.js';
//@ts-ignore
import { canvasTriangle, canvasTriangleAnchors } from '../../public/meta2dImages/canvasDraw/myCanvasDraw/canvasTriangle.js';

import { useEventbus } from '@/hooks/useEventbus';

/**
 * 注册meta2d实例
 * @param param0
 */
export const useMeta2dCanvas = ({ id, options }: { id: string; options?: Options }) => {
  const event = useEventbus();
  const registerMeta2d = () => {
    new Meta2d(id, options);
    // 注册流程图
    meta2d.register(flowPens());

    // 注册活动图元
    meta2d.register(activityDiagram());
    // 原生canvas绘画的图库，支持逻辑复杂的需求
    meta2d.registerCanvasDraw(activityDiagramByCtx());

    // 注册时序图
    meta2d.register(sequencePens());
    meta2d.registerCanvasDraw(sequencePensbyCtx());

    // 注册类图
    meta2d.register(classPens());

    // 注册表单
    meta2d.registerCanvasDraw(formPens());

    // 直接调用Echarts的注册函数
    registerEcharts();

    // 直接调用HightCharts的注册函数
    registerHighcharts();
    // 直接调用LightningChart的注册函数
    registerLightningChart();

    //注册自定义path2d图元
    meta2d.register({ myTriangle });
    // 注册自定义图元的m锚点信息
    meta2d.registerAnchors({ myTriangle: myTriangleAnchors });

    // 注册自定义canvasDraw函数
    meta2d.registerCanvasDraw({ canvasTriangle });
    //注册锚点
    meta2d.registerAnchors({ canvasTriangle: canvasTriangleAnchors });

    // 注册其他自定义图形库
    // ...

    // 读取本地存储
    let data: any = localStorage.getItem('meta2d');
    if (data) {
      data = JSON.parse(data);

      // 判断是否为运行查看，是-设置为预览模式
      if (location.pathname === '/preview') {
        data.locked = 1;
      } else {
        data.locked = 0;
      }
      meta2d.open(data);
    }

    event.customEmit('opened');
    event.customEmit('load');
  };
  onMounted(() => {
    registerMeta2d();
  });
};
