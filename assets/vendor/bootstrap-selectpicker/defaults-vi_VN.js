/*
 * Dá»‹ch cĂ¡c vÄƒn báº£n máº·c Ä‘á»‹nh cho bootstrap-select.
 * Locale: VI (Vietnamese)
 * Region: VN (Viá»‡t Nam)
 */
(function ($) {
    $.fn.selectpicker.defaults = {
        noneSelectedText: 'ChÆ°a chá»n',
        noneResultsText: 'KhĂ´ng cĂ³ káº¿t quáº£ cho {0}',
        countSelectedText: function (numSelected, numTotal) {
            return '{0} má»¥c Ä‘Ă£ chá»n';
        },
        maxOptionsText: function (numAll, numGroup) {
            return [
                'KhĂ´ng thá»ƒ chá»n (giá»›i háº¡n {n} má»¥c)',
                'KhĂ´ng thá»ƒ chá»n (giá»›i háº¡n {n} má»¥c)'
            ];
        },
        selectAllText: 'Chá»n táº¥t cáº£',
        deselectAllText: 'Bá» chá»n',
        multipleSeparator: ', '
    };
})(jQuery);