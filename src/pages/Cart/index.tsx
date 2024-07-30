import * as S from "./styles"
import { MapPin, CurrencyDollar } from "@phosphor-icons/react"
import { defaultTheme } from "../../styles/theme/defaultTheme"
import { TextInput } from "../../components/Form/TextInput"

export function Cart() {
  return (
    <S.CartContainer>
      <div style={{ marginRight: "3.2rem" }}>
        <S.Title>Complete seu pedido</S.Title>
        <S.FormContainer>
          <S.FormInfosContainer>
            <div style={{ display: "flex" }}>
              <MapPin size={22} color={defaultTheme.colors["yellow-dark"]} />
              <div style={{ marginLeft: "1rem" }}>
                <S.InfoTitle>Endereço de Entrega</S.InfoTitle>
                <S.InfoSubTitle>
                  Informe o endereço onde deseja receber seu pedido
                </S.InfoSubTitle>
              </div>
            </div>

            <S.AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: "cep" } }}
              />
              <TextInput
                placeholder="Rua"
                type="text"
                containerProps={{ style: { gridArea: "street" } }}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: "number" } }}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: "fullAddress" } }}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: "state" } }}
              />
            </S.AddressForm>
          </S.FormInfosContainer>
        </S.FormContainer>
        <S.CreditCardContainer>
          <div style={{ display: "flex" }}>
            <CurrencyDollar
              size={22}
              color={defaultTheme.colors["purple-dark"]}
            />
            <div style={{ marginLeft: "1rem" }}>
              <S.InfoTitle>Pagamento</S.InfoTitle>
              <S.InfoSubTitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.InfoSubTitle>
            </div>
          </div>
        </S.CreditCardContainer>
      </div>

      <div>
        <S.Title>Cafés selecionados</S.Title>
      </div>
    </S.CartContainer>
  )
}
