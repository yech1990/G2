// @ts-nocheck
import { Chart } from '../../../src/';
import { data } from '../../data/scatter';
import { createDiv } from '../../util/dom';

describe('legend unchecked', () => {
  it('category', () => {
    const div = createDiv();

    const chart = new Chart({
      container: div,
      width: 800,
      height: 600,
      padding: [20],
    });

    chart.data(data);
    chart.point().position('x*y').shape('circle').style({
      fillOpacity: 0.85,
    });
    chart.trendline({
      type: 'quad',
      confidenceStyle: {
        fill: '#ccc',
      },
    });
    chart.render();
    const options = chart.getOptions();
    const trendline = chart.getController('trendline');
    const dataLength = trendline.data.trendlineData.length;
    expect(options.trendline).not.toBeUndefined();
    expect(options.trendline.type).toBe('quad');
    expect(trendline.options.xField).toBe('x');
    expect(trendline.options.yField).toBe('y');
    expect(trendline.options.confidenceStyle.fill).toBe('#ccc');
    expect(trendline.options.type).toBe('quad');
    expect(trendline.options.data.confidenceData).not.toEqual([]);
    chart.changeData(data.slice(0, 10));
    const changedTrendline = chart.getController('trendline');
    expect(changedTrendline.data.trendlineData.length !== dataLength).toBeTruthy();
    chart.destroy();
    expect(chart.getController('trendline').container.destroyed).toBeTruthy();
  });
});
