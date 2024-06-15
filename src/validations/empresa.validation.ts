
import * as yup from 'yup';

const empresaSchema = yup.object().shape({
  razao_social: yup.string().required('A razão social é obrigatória'),
  nome_fantasia: yup.string().required('O nome fantasia é obrigatório'),
  cnpj: yup.string().required('O CNPJ é obrigatório').length(14, 'O CNPJ deve ter exatamente 14 caracteres'),
  inscricao_estadual: yup.string(),
  telefone: yup.string(),
  endereco: yup.string(),
});

export default empresaSchema;
