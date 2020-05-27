import { Chart } from '../../../src/';
import { CITY_SALE } from '../../util/data';
import { createDiv } from '../../util/dom';
import { CategoryAxis } from '../../../src/dependents';

describe('axis type',()=>{
  const div = createDiv();

  it('category axis',()=>{
    const chart = new Chart({
        container: div,
        height: 200,
        width: 100,
        autoFit: false,
    });
    
    chart.data(CITY_SALE);
    chart.axis('city',{
      type: 'category',
      label:{
        autoWrap: true,
        autoRotate: false,
        autoHide: false
      } as any
    });
    chart
    .interval()
    .position('city*sale')
    .color('category');
    chart.render();
  });

});