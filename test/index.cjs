const test = require('node:test');
const assert = require('node:assert/strict');
const { franc } = require('../dist/index.cjs');

const lang = () => {
    assert.equal(franc('Привет мир!', { whitelist: ['eng', 'rus'] }), 'rus');
    assert.equal(franc('Alle menslike wesens word vry'), 'afr');
    assert.equal(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট'), 'ben');
    assert.equal(franc('Hello my friend. Are you ready?', { whitelist: ['eng', 'rus'] }), 'eng');
    assert.equal(franc(`🎶Tik Tok Tháng 10/2025:Tổng hợp các điệu nhảy triệu view gây bão khắp trên Tik Tok VN #20`), 'vie');
    assert.equal(franc('Bunicul care își crește singur nepoata în mizerie'), 'ron');
    assert.equal(franc('😱OMG Granny Ballerina Cappuccina Turned into a Zombie! Unexpected team up with Baby Tung Tung Sahur'), 'eng')
    assert.equal(franc('ℂ𝕙𝕚𝕔𝕜𝕖𝕟 𝕊𝕥𝕒𝕣𝕤 ℙ𝕙𝕠𝕟𝕜 ( 𝕊𝕝𝕠𝕨𝕖𝕕 + ℝ𝕖𝕧𝕖𝕣𝕓 )'), 'und')
};

test('franc-node', (t) => {
    t.test('Check lang', lang);
});
