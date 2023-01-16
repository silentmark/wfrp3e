import type { ToObjectFalseType } from "@league-of-foundry-developers/foundry-vtt-types/src/types/helperTypes";
import type { WfrpCharacter } from "./wfrp-character";


export class WfrpCharacterSheetData implements ActorSheet.Data<WfrpCharacterSheetOptions> {
    cssClass: string;
    editable: boolean;
    document: WfrpCharacter;
    data: ToObjectFalseType<foundry.abstract.Document<any, any>>
    limited: boolean;
    options: WfrpCharacterSheetOptions;
    owner: boolean;
    title: string;
    actor: Actor;
    items: ToObjectFalseType<foundry.data.ActorData>['items'];
    effects: ToObjectFalseType<foundry.data.ActorData>['effects'];
}

export class WfrpCharacterSheetOptions implements ActorSheet.Options { 
    viewPermission: foundry.CONST.DOCUMENT_PERMISSION_LEVELS;
    closeOnSubmit: boolean;
    submitOnChange: boolean;
    submitOnClose: boolean;
    editable: boolean;
    sheetConfig: boolean;
    baseApplication: string | null;
    width: number | null;
    height: number | 'auto' | null;
    top: number | null;
    left: number | null;
    scale: number | null;
    popOut: boolean;
    minimizable: boolean;
    resizable: boolean;
    id: string;
    classes: string[];
    title: string;
    template: string | null;
    scrollY: string[];
    tabs: Omit<TabsConfiguration, 'callback'>[];
    dragDrop: Omit<DragDropConfiguration, 'permissions' | 'callbacks'>[];
    filters: Omit<SearchFilterConfiguration, 'callback'>[];
}