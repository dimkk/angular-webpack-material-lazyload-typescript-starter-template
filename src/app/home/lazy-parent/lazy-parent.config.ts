import { StateProvider, StateDeclaration } from 'angular-ui-router';

import { loadLazyState, resolveLazyState } from '../../shared/util.service';
import { IMenu } from '../shared/side-menu/shared/side-menu.models';

function configure($stateProvider: StateProvider) {
    $stateProvider.state("lazyParent", <StateDeclaration>{
        parent: 'home',
        abstract: true,
        component: 'lazyParentComponent',
        data: <IMenu>{ isMenuItem: true, navTitle: "lazy-parent" }
    }).state("lazyChild", <StateDeclaration>{
        lazyLoad: loadLazyState(function (resolve, $ocLazyLoad, loaderService) {
            require.ensure([], function () {
                let lazyModule: any = require('./lazy-child/lazy-child.module');
                resolveLazyState(lazyModule, resolve, $ocLazyLoad, loaderService);
            }, "lazyChild");
        }),
        component: "lazyChildComponent",
        parent: "lazyParent",
        data: <IMenu>{
            isChild: true,
            navTitle: "Lazy Child",
            moduleTitle: "Lazy Child",
            isMenuItem: true
        }
    }).state("lazyChildOne", <StateDeclaration>{
        lazyLoad: loadLazyState(function (resolve, $ocLazyLoad, loaderService) {
            require.ensure([], function () {
                let lazyModule: any = require('./lazy-child-one/lazy-child-one.module');
                resolveLazyState(lazyModule, resolve, $ocLazyLoad, loaderService);
            }, "lazyChildOne");
        }),
        component: "lazyChildOneComponent",
        parent: "lazyParent",
        data: <IMenu>{
            isChild: true,
            navTitle: "Lazy Child One",
            moduleTitle: "Lazy Child One",
            isMenuItem: true
        }
    }).state("lazyChildTwo", <StateDeclaration>{
        lazyLoad: loadLazyState(function (resolve, $ocLazyLoad, loaderService) {
            require.ensure([], function () {
                let lazyModule: any = require('./lazy-child-two/lazy-child-two.module');
                resolveLazyState(lazyModule, resolve, $ocLazyLoad, loaderService);
            }, "lazyChildTwo");
        }),
        component: "lazyChildTwoComponent",
        parent: "lazyParent",
        data: <IMenu>{
            isChild: true,
            navTitle: "Lazy Child Two",
            moduleTitle: "Lazy Child Two",
            isMenuItem: true
        }
    });
}

configure.$inject = ['$stateProvider'];

export default configure;