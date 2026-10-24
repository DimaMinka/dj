export interface QuoteDomElements {
  // Top-level sections & indicators
  builderSection: HTMLElement | null;
  clientProposalSection: HTMLElement | null;
  viewModeIndicator: HTMLElement | null;
  quoteStatusBadge: HTMLElement | null;
  pageMainHeading: HTMLElement | null;

  // Proposal Elements
  propEventName: HTMLElement | null;
  propVenue: HTMLElement | null;
  propDate: HTMLElement | null;
  propZone: HTMLElement | null;
  propTotalHoursVal: HTMLElement | null;
  propStageHoursVal: HTMLElement | null;
  propBehindHoursVal: HTMLElement | null;
  propIcebergRatioVal: HTMLElement | null;
  propIcebergTooltip: HTMLElement | null;
  propStageSegment: HTMLElement | null;
  propBehindSegment: HTMLElement | null;
  propEquipTotalVal: HTMLElement | null;
  propServicesTotalVal: HTMLElement | null;
  propEquipmentList: HTMLElement | null;
  propServicesList: HTMLElement | null;
  propSubtotalVal: HTMLElement | null;
  propDiscountRow: HTMLElement | null;
  propDiscountLabel: HTMLElement | null;
  propDiscountVal: HTMLElement | null;
  propVatRow: HTMLElement | null;
  propVatVal: HTMLElement | null;
  propTotalLabel: HTMLElement | null;
  propGrandTotalVal: HTMLElement | null;
  propWhatsAppConfirmBtn: HTMLAnchorElement | null;

  // Builder Input Elements
  inputEventName: HTMLInputElement | null;
  inputClientName: HTMLInputElement | null;
  inputEventDate: HTMLInputElement | null;
  selectLocationZone: HTMLSelectElement | null;
  sliderDjHours: HTMLInputElement | null;
  djHoursVal: HTMLElement | null;
  djCostVal: HTMLElement | null;
  sliderPreprodHours: HTMLInputElement | null;
  preprodHoursVal: HTMLElement | null;
  preprodCostVal: HTMLElement | null;
  tripBtn1: HTMLElement | null;
  computedSetupVal: HTMLElement | null;
  computedSetupHint: HTMLElement | null;
  computedLogisticsVal: HTMLElement | null;
  computedLogisticsHint: HTMLElement | null;
  discountInputsRow: HTMLElement | null;
  inputDiscountVal: HTMLInputElement | null;
  inputDiscountReason: HTMLInputElement | null;

  // Receipt Elements
  recTotalHours: HTMLElement | null;
  recStageBar: HTMLElement | null;
  recBehindBar: HTMLElement | null;
  recStageHours: HTMLElement | null;
  recBehindHours: HTMLElement | null;
  recIcebergRatioVal: HTMLElement | null;
  recIcebergTooltip: HTMLElement | null;
  recEquipSubtotal: HTMLElement | null;
  recServicesSubtotal: HTMLElement | null;
  recGrossTotal: HTMLElement | null;
  recDiscountLine: HTMLElement | null;
  recDiscountAmount: HTMLElement | null;
  recNetTotal: HTMLElement | null;
  recVatLine: HTMLElement | null;
  recVatAmount: HTMLElement | null;
  recTotalLabel: HTMLElement | null;
  recGrandTotal: HTMLElement | null;
  btnWhatsAppDirect: HTMLAnchorElement | null;

  // Toast
  toastMessage: HTMLElement | null;
  toastText: HTMLElement | null;
}

export function cacheDomElements(): QuoteDomElements {
  return {
    builderSection: document.getElementById('builderSection'),
    clientProposalSection: document.getElementById('clientProposalSection'),
    viewModeIndicator: document.getElementById('viewModeIndicator'),
    quoteStatusBadge: document.getElementById('quoteStatusBadge'),
    pageMainHeading: document.getElementById('pageMainHeading'),

    propEventName: document.getElementById('propEventName'),
    propVenue: document.getElementById('propVenue'),
    propDate: document.getElementById('propDate'),
    propZone: document.getElementById('propZone'),
    propTotalHoursVal: document.getElementById('propTotalHoursVal'),
    propStageHoursVal: document.getElementById('propStageHoursVal'),
    propBehindHoursVal: document.getElementById('propBehindHoursVal'),
    propIcebergRatioVal: document.getElementById('propIcebergRatioVal'),
    propIcebergTooltip: document.getElementById('propIcebergTooltip'),
    propStageSegment: document.getElementById('propStageSegment'),
    propBehindSegment: document.getElementById('propBehindSegment'),
    propEquipTotalVal: document.getElementById('propEquipTotalVal'),
    propServicesTotalVal: document.getElementById('propServicesTotalVal'),
    propEquipmentList: document.getElementById('propEquipmentList'),
    propServicesList: document.getElementById('propServicesList'),
    propSubtotalVal: document.getElementById('propSubtotalVal'),
    propDiscountRow: document.getElementById('propDiscountRow'),
    propDiscountLabel: document.getElementById('propDiscountLabel'),
    propDiscountVal: document.getElementById('propDiscountVal'),
    propVatRow: document.getElementById('propVatRow'),
    propVatVal: document.getElementById('propVatVal'),
    propTotalLabel: document.getElementById('propTotalLabel'),
    propGrandTotalVal: document.getElementById('propGrandTotalVal'),
    propWhatsAppConfirmBtn: document.getElementById('propWhatsAppConfirmBtn') as HTMLAnchorElement | null,

    inputEventName: document.getElementById('inputEventName') as HTMLInputElement | null,
    inputClientName: document.getElementById('inputClientName') as HTMLInputElement | null,
    inputEventDate: document.getElementById('inputEventDate') as HTMLInputElement | null,
    selectLocationZone: document.getElementById('selectLocationZone') as HTMLSelectElement | null,
    sliderDjHours: document.getElementById('sliderDjHours') as HTMLInputElement | null,
    djHoursVal: document.getElementById('djHoursVal'),
    djCostVal: document.getElementById('djCostVal'),
    sliderPreprodHours: document.getElementById('sliderPreprodHours') as HTMLInputElement | null,
    preprodHoursVal: document.getElementById('preprodHoursVal'),
    preprodCostVal: document.getElementById('preprodCostVal'),
    tripBtn1: document.getElementById('tripBtn1'),
    computedSetupVal: document.getElementById('computedSetupVal'),
    computedSetupHint: document.getElementById('computedSetupHint'),
    computedLogisticsVal: document.getElementById('computedLogisticsVal'),
    computedLogisticsHint: document.getElementById('computedLogisticsHint'),
    discountInputsRow: document.getElementById('discountInputsRow'),
    inputDiscountVal: document.getElementById('inputDiscountVal') as HTMLInputElement | null,
    inputDiscountReason: document.getElementById('inputDiscountReason') as HTMLInputElement | null,

    recTotalHours: document.getElementById('recTotalHours'),
    recStageBar: document.getElementById('recStageBar'),
    recBehindBar: document.getElementById('recBehindBar'),
    recStageHours: document.getElementById('recStageHours'),
    recBehindHours: document.getElementById('recBehindHours'),
    recIcebergRatioVal: document.getElementById('recIcebergRatioVal'),
    recIcebergTooltip: document.getElementById('recIcebergTooltip'),
    recEquipSubtotal: document.getElementById('recEquipSubtotal'),
    recServicesSubtotal: document.getElementById('recServicesSubtotal'),
    recGrossTotal: document.getElementById('recGrossTotal'),
    recDiscountLine: document.getElementById('recDiscountLine'),
    recDiscountAmount: document.getElementById('recDiscountAmount'),
    recNetTotal: document.getElementById('recNetTotal'),
    recVatLine: document.getElementById('recVatLine'),
    recVatAmount: document.getElementById('recVatAmount'),
    recTotalLabel: document.getElementById('recTotalLabel'),
    recGrandTotal: document.getElementById('recGrandTotal'),
    btnWhatsAppDirect: document.getElementById('btnWhatsAppDirect') as HTMLAnchorElement | null,

    toastMessage: document.getElementById('toastMessage'),
    toastText: document.getElementById('toastText'),
  };
}
