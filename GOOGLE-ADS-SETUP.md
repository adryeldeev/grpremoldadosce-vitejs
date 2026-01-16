# Configuração do Google Ads - GR Pré Moldados

## 📋 Checklist de Configuração

### 1. Obter IDs do Google Ads

Após criar sua conta no Google Ads (ads.google.com):

1. Acesse **Ferramentas e Configurações** → **Medição** → **Conversões**
2. Clique em **+ Nova conversão**
3. Selecione **Site**
4. Configure as conversões:

#### Conversão Principal - Orçamento Solicitado
- **Nome**: Orçamento Solicitado
- **Categoria**: Lead
- **Valor**: Usar o mesmo valor para cada conversão (ex: R$ 50)
- **Contagem**: Uma por clique
- **Janela de conversão**: 30 dias

#### Conversão Secundária - Clique no WhatsApp
- **Nome**: WhatsApp - Contato
- **Categoria**: Contato
- **Valor**: R$ 20
- **Contagem**: Todas
- **Janela de conversão**: 30 dias

#### Conversão Terciária - Clique no Telefone
- **Nome**: Telefone - Ligação
- **Categoria**: Contato
- **Valor**: R$ 20
- **Contagem**: Todas
- **Janela de conversão**: 30 dias

### 2. Copiar IDs e Labels

Após criar as conversões, você verá:
- **ID de conversão**: `AW-XXXXXXXXXX`
- **Label de conversão**: Código único para cada conversão

### 3. Atualizar o Código

No arquivo `src/utils/analytics.ts`, substitua:

```typescript
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXXX'; // Cole seu ID aqui
export const GOOGLE_ADS_CONVERSION_LABEL = 'YYYYYYYYYY'; // Cole o label da conversão principal
```

### 4. Verificar Implementação

1. No Google Ads, vá em **Ferramentas** → **Conversões**
2. Clique na conversão criada
3. Role até **Tag da conversão do Google** 
4. Clique em **Verificar sua tag**
5. Teste o site e veja se as conversões são registradas

## 🎯 Conversões Configuradas

### 1. **Orçamento Solicitado** (Principal)
- Disparada quando usuário solicita orçamento
- Usa: `trackOrcamentoConversion()`

### 2. **Clique no WhatsApp**
- Disparada ao clicar no botão flutuante do WhatsApp
- Usa: `trackWhatsAppConversion()`

### 3. **Clique no Telefone**
- Disparada ao clicar no número de telefone
- Usa: `trackPhoneConversion()`

## 📊 Campanhas Recomendadas

### Campanha 1: Pesquisa - Blocos de Concreto
**Palavras-chave:**
- "blocos de concreto fortaleza"
- "blocos estruturais fortaleza"
- "pré moldados fortaleza"
- "canaletas fortaleza"
- "materiais de construção fortaleza"

**Lance**: Começar com R$ 2,00 - R$ 5,00 por clique

**Orçamento diário**: R$ 50 - R$ 100

### Campanha 2: Display - Remarketing
- Alcançar visitantes que não converteram
- Banner: Destaque produtos e ofertas
- Orçamento: R$ 20 - R$ 30/dia

### Campanha 3: Performance Max
- Deixar o Google otimizar automaticamente
- Usar todas as imagens e vídeos dos produtos
- Orçamento: R$ 50 - R$ 100/dia

## 🔍 Monitoramento

Acompanhe diariamente:
1. **Taxa de conversão**: Meta > 3%
2. **Custo por conversão**: Mantenha < R$ 100
3. **CTR (Taxa de cliques)**: Meta > 5%
4. **Índice de qualidade**: Buscar nota 7-10

## 💡 Dicas Importantes

1. **Comece devagar**: R$ 50/dia no início
2. **Teste anúncios**: Crie pelo menos 3 variações
3. **Use extensões**: Telefone, local, links de site
4. **Palavras-chave negativas**: Adicione termos irrelevantes
5. **Ajuste lances**: Monitore e otimize semanalmente

## 📱 Extensões Recomendadas

### Extensão de Telefone
- Número: (85) 9 2895-9924

### Extensão de Local
- Fortaleza - CE

### Extensão de Links do Site
1. Produtos → #produtos
2. Sobre → #sobre
3. Contato → #contato

### Extensão de Frase de Destaque
- "15+ anos de experiência"
- "Qualidade garantida"
- "Entrega rápida em Fortaleza"
- "Orçamento grátis"

## ⚠️ IMPORTANTE

- Não esqueça de substituir os IDs placeholder no código
- Teste as conversões antes de ativar as campanhas
- Configure o orçamento diário para evitar gastos excessivos
- Analise os dados semanalmente e ajuste as campanhas

## 📞 Próximos Passos

1. ✅ Site otimizado e pronto
2. ✅ Google Analytics configurado
3. ⏳ Criar conta Google Ads (se ainda não tiver)
4. ⏳ Configurar conversões
5. ⏳ Atualizar IDs no código
6. ⏳ Criar primeira campanha
7. ⏳ Monitorar e otimizar

---

**Data da última atualização**: 15 de janeiro de 2026
