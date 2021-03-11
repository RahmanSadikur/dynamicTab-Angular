import {EditdeceplineComponent} from './editdecepline/editdecepline.component';
import{DemoComponent} from './demo/demo.component';
import{TestComponent} from './test/test.component'
import{Tab} from './tab.model';
export class EntryComponent{
    tab=[
        new Tab(EditdeceplineComponent, 'Editdecepline', { parent: 'DeciplineComponent' }, true),
        new Tab(DemoComponent, 'DemoComponent', { parent: 'DeciplineComponent' }, true),
        new Tab(TestComponent, 'TestComponent', { parent: 'DeciplineComponent' }, true),
    ]

}