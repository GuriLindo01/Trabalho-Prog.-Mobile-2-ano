import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='Gdrake' />
    <FotoPerfil />

   <CartaoUsuario
      nome='Robson Neves'
      idade='21'
      rede_social='@robson_design'
      endereco='Rua das Amoreiras, 55'
      descricao='Designer de UX/UI'
      img='perfil01'
    />

<CartaoUsuario
      nome='Alice Ferreira'
      idade='28'
      rede_social='@alice_fotografia'
      endereco='Avenida Paulista, 1500, Apt 12'
      descricao='Fotógrafa Profissional'
      img='perfil02'
    />

<CartaoUsuario
      nome='Carlos Eduardo'
      idade='42'
      rede_social='@ce_tech'
      endereco='Praça da Sé, 30, Sala 501'
      descricao='Consultor de TI'
      img='perfil03'
    />

<CartaoUsuario
      nome='Bia Santos'
      idade='19'
      rede_social='@biasantos_studies'
      endereco='Travessa Bela Vista, 77'
      descricao='Estudante de Medicina'
      img='perfil04'
    />

<CartaoUsuario
      nome='Fernando Gomes'
      idade='55'
      rede_social='N/A'
      endereco='Estrada Velha, Km 10'
      descricao='Pintor e Artista Plástico'
      img='perfil05'
    />

<CartaoUsuario
      nome='Juliana Rocha'
      idade='31'
      rede_social='@ju.rocha.yoga'
      endereco='Rua do Limoeiro, 12'
      descricao='Instrutora de Yoga'
      img='perfil06'
    />

<CartaoUsuario
      nome='Lucas Vieira'
      idade='25'
      rede_social='@lvieira_music'
      endereco='Alameda dos Anjos, 90, Casa 3'
      descricao='Músico e Produtor'
      img='perfil07'
    />

<CartaoUsuario
      nome='Márcia Oliveira'
      idade='38'
      rede_social='@marcia_adv'
      endereco='Rua XV de Novembro, 1000'
      descricao='Advogada Trabalhista'
      img='perfil08'
    />

<CartaoUsuario
      nome='Guilherme Pires'
      idade='60'
      rede_social='N/A'
      endereco='Sítio do Sossego, Lote 4'
      descricao='Aposentado e Jardineiro'
      img='perfil09'
    />

<CartaoUsuario
      nome='Talita Melo'
      idade='23'
      rede_social='@tali_explorer'
      endereco='Rua Célia Chaves, 201'
      descricao='Turismóloga e Viajante'
      img='perfil10'
    />

    <CartaoUsuario
      nome='Enzo Costa'
      idade='26'
      rede_social='@enzocosta_chef'
      endereco='Rua das Especiarias, 303'
      descricao='Chef de Cozinha'
      img='perfil11'
    />

<CartaoUsuario
      nome='Sofia Ramos'
      idade='49'
      rede_social='N/A'
      endereco='Avenida Atlântica, 4000'
      descricao='Bibliotecária'
      img='perfil12'
    />

<CartaoUsuario
      nome='Ricardo Pinho'
      idade='33'
      rede_social='@rp.financas'
      endereco='Alameda Barão de Lima, 100'
      descricao='Analista Financeiro'
      img='perfil13'
    />

<CartaoUsuario
      nome='Patrícia Viana'
      idade='20'
      rede_social='@patyviana_music'
      endereco='Rua da Harmonia, 5'
      descricao='Cantora e Compositora'
      img='perfil14'
    />

<CartaoUsuario
      nome='Alexandre Mello'
      idade='65'
      rede_social='N/A'
      endereco='Fazenda São Bento'
      descricao='Veterinário Aposentado'
      img='perfil15'
    />

<CartaoUsuario
      nome='Gabriela Nogueira'
      idade='37'
      rede_social='@gabi.mkt'
      endereco='Rua das Inovações, Bloco C, 3º Andar'
      descricao='Especialista em Marketing Digital'
      img='perfil16'
    />

<CartaoUsuario
      nome='Felipe Motta'
      idade='24'
      rede_social='@felipecoder'
      endereco='Travessa dos Dados, 101'
      descricao='Programador Frontend'
      img='perfil17'
    />

<CartaoUsuario
      nome='Helena Luz'
      idade='51'
      rede_social='@helenaluz_artesanato'
      endereco='Rua do Artesão, 88'
      descricao='Professora de Artesanato'
      img='perfil18'
    />

<CartaoUsuario
      nome='Thiago Lins'
      idade='30'
      rede_social='@lins_sports'
      endereco='Avenida dos Campeões, 22'
      descricao='Personal Trainer'
      img='perfil19'
    />

<CartaoUsuario
      nome='Viviane Dantas'
      idade='44'
      rede_social='@vi_dantas'
      endereco='Rua dos Escritores, 999, Casa 1'
      descricao='Escritora e Editora'
      img='perfil20'
    />

<CartaoUsuario
      nome='Mateus Cordeiro'
      idade='27'
      rede_social='@mateus_ecom'
      endereco='Rua das Oliveiras, 70'
      descricao='Empreendedor Digital'
      img='perfil21'
    />

<CartaoUsuario
      nome='Laura Benites'
      idade='36'
      rede_social='@laura.rh'
      endereco='Avenida das Acácias, 1001'
      descricao='Analista de RH Sênior'
      img='perfil22'
    />

<CartaoUsuario
      nome='Roberto Cruz'
      idade='53'
      rede_social='N/A'
      endereco='Praça Tiradentes, 45'
      descricao='Motorista de Aplicativo'
      img='perfil23'
    />

<CartaoUsuario
      nome='Isabela Guedes'
      idade='20'
      rede_social='@isa_guedes_vet'
      endereco='Travessa dos Animais, 15'
      descricao='Estudante de Veterinária'
      img='perfil24'
    />

<CartaoUsuario
      nome='Daniel Souza'
      idade='40'
      rede_social='@daniel_construtor'
      endereco='Rua Projetada, Lote 1'
      descricao='Mestre de Obras'
      img='perfil25'
    />

<CartaoUsuario
      nome='Renata Sales'
      idade='29'
      rede_social='@renata.s_pedagoga'
      endereco='Alameda da Infância, 123'
      descricao='Pedagoga e Contadora de Histórias'
      img='perfil26'
    />

<CartaoUsuario
      nome='Vinicius Borges'
      idade='35'
      rede_social='@vini.games.br'
      endereco='Rua do Joystick, 50'
      descricao='Desenvolvedor de Jogos'
      img='perfil27'
    />

<CartaoUsuario
      nome='Simone Dias'
      idade='47'
      rede_social='@simone_dias_chef'
      endereco='Avenida Gastronômica, 80'
      descricao='Dona de Restaurante'
      img='perfil28'
    />

<CartaoUsuario
      nome='Eduardo Leite'
      idade='62'
      rede_social='N/A'
      endereco='Fazenda Esperança'
      descricao='Produtor Rural'
      img='perfil29'
    />

<CartaoUsuario
      nome='Carina Melo'
      idade='22'
      rede_social='@carina.moda'
      endereco='Rua das Tendências, 18'
      descricao='Estilista e Consultora de Moda'
      img='perfil30'
    />
  </ScrollView>


}
