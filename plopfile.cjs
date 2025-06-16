module.exports = function (plop) {
    plop.setGenerator('form-panels-batch', {
  description: 'Generate all form panel components',
  prompts: [], 
  actions: [
  ...['NomorIdentitas', 'DataPasien', 'AlamatIdentitas', 'AlamatDomisili', 'Kontak', 'KontakDarurat', 'HubunganKeluarga']
    .map(name => ({
      type: 'add',
      path: `src/components/form-panels/${name}Panel.tsx`,
      templateFile: 'plop-templates/Panel.tsx.hbs',
      data: { name }  // ✅ Pass name so template can use it
    }))
]
});
};
