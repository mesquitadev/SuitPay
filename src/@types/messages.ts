export enum Messages {
  OK = 'Transação realizada com sucesso!',
  NO_FUNDS = 'Você não possui saldo suficiente! Altere o valor e tente novamente.',
  SOURCE_USER_NOT_FOUND = 'Usuário de envio não encontrado.',
  DESTINATION_USER_NOT_FOUND = 'Usuário de destino não encontrado.',
  WRONG_DATA_FORMAT = 'Falha ao salvar um ou mais documentos, verifique o formato do arquivo e tente novamente!',
  SOURCE_DESTINATION_EQUALS = 'Usuário de destino igual ao usuário de envio, favor escolher outro usuário de destino!',
  OPERATION_EXCEEDS_LIMIT = 'Esta transação excede os limites para sua conta. Entre em contato com nosso suporte para solicitar um aumento no seu limite.',
  NO_MOBILE_DEVICE_REGISTERED = 'Nenhum dispositivo de verificação cadastrado!',
  SOURCE_USER_HAVE_NO_ENABLED_ACCOUNT = 'Sua conta foi bloqueada! Entre em contato com nosso suporte.',
  TOO_MANY_OPEN_BOLETOS_NO_FUNDS = 'Limite de boletos em aberto atingido. Pague ou aguarde o vencimendo de ao menos um boleto em aberto para emitir novos boletos.',
  ACCOUNT_DOCUMENTS_NOT_VALIDATED = 'Conta ainda não verificada! Para prosseguir, favor preencher os dados e enviar a documentação.',
  ZERO_OR_NEGATIVE_VALUE_NOT_ALLOWED = 'Valor deve ser maior que zero.',
  WRONG_DATA_SIZE = 'Falha ao salvar a imagem, verifique o tamanho do arquivo e tente novamente!',
  BLOCKED_OUT_TRANSACTIONS = 'Sua conta foi bloqueada! Entre em contato com nosso suporte.',
  BLOCKED = 'Sua conta foi bloqueada! Entre em contato com nosso suporte.',
  GREATER_THAN_THE_MAX_VALUE = "O valor máximo para depósito via boleto é R$ ' + response.data.value + '.'",
  SOURCE_USER_INACTIVE = 'Sua conta está inativa! Entre em contato com nosso suporte.',
  DESTINATION_USER_INACTIVE = 'Usuário de destino está inativo.',
  DESTINATION_USER_BLOCKED = 'Usuário de destino está bloqueado.',
  OPERATION_EXCEEDS_TIME_LIMIT = 'As solicitações de TED podem ser realizadas de segunda a sexta das 09h à 15h00, tente novamente no horário permitido.',
  PIX_KEY_NOT_FOUND = 'Chave PIX não encontrada.',
  ERROR = 'Erro interno, tente novamente!',
}
