import { 
  Directive ,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  Input,
  ElementRef 
} from '@angular/core';
import {MaskComponent} from '../../components/mask/mask.component';

@Directive({
  selector: '[jrLoadingMask]'
})
export class LoadingMaskDirective {

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector,
      private el: ElementRef
  ) { }

  _loading: boolean = false;
  componentRef: any;

  @Input('jrLoadingMask')
    set loading(flag:boolean){
      debugger; 
      if(typeof flag !='boolean'){
        return;
      }
      if(flag){
        this.createLoaderMask();
        return;
      }
      this.removeLoaderMask();
    }
    createLoaderMask() :void{
      this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(MaskComponent)
      .create(this.injector);
    
      // 2. Attach component to the appRef so that it's inside the ng component tree
      this.appRef.attachView(this.componentRef.hostView);
      
      // 3. Get DOM element from component
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      const htmlEle =  this.el.nativeElement as HTMLElement;
      htmlEle.style.position = 'relative';

      domElem.style.position = 'absolute';
      domElem.style.top = '0px';
      domElem.style.left = '0px';
      domElem.style.zIndex = '10';
      

      // 4. Append DOM element to the body
      this.el.nativeElement.appendChild(domElem);
    }
    removeLoaderMask() :void{
      if(!this.componentRef){
        return;
      }
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
}
