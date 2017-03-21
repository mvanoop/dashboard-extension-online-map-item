﻿/// <reference path="meta.ts" />
/// <reference path="icon.ts" />
/// <reference path="localization.ts" />
/// <reference path="online-map-viewer.ts" />

module CustomItems {
    export class OnlineMapItemExtension implements DevExpress.JS.Dashboard.ICustomItemExtension {
        name = ONLINE_MAP_EXTENSION_NAME;
        metaData = onlineMapMeta;

        constructor(dashboardControl: any) {
            dashboardControl.registerIcon(ONLINE_MAP_ICON);
        }

        public createViewerItem = (model: DevExpress.JS.Dashboard.ICustomItemModel, $element: JQuery, content: any, args: { viewerItem: DevExpress.JS.Dashboard.customViewerItem }) => {
            if(model.customItemType() === this.name) {
                args.viewerItem = new CustomItems.onlineMapItem(model, $element, content);
            }
        };
    }
}