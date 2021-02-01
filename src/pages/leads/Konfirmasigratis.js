import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import fbadspemula from "../../images/fbadspemula.png";
import ReactPixel from "react-facebook-pixel";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../../components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
  min-height: 66rem;
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const Text = styled.h1`
  ${tw`text-white text-lg text-center`}
`;

export default () => {
  useEffect(() => {
    const advancedMatching = { em: "muhamadaziz047@email.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
      autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
      debug: false, // enable logs
    };
    ReactPixel.init("845126106051612", advancedMatching, options);
    ReactPixel.track("Lead");
  }, []);

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/tentang">Tentang</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/harga">Harga</NavLink>
      <NavLink href="/kontak">Kontak Kami</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="/login">Login</NavLink>
      <PrimaryLink href="/daftar">Daftar</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Selanjutnya,
            <br />
            Konfirmasi Email Anda
          </Heading>
          <img
            // tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
            src={fbadspemula}
            alt="Design fbadspemula"
          />
          <Text>
            Dalam 3 s.d 5 menit saya akan kirimkan email konfirmasi.
            <br />
            vSilahkan di cek bagian Inbox, Spam atau Folder Promosi
            <br />
            Kemudian buka emailnya lalu Klik Link Konfirmasi
          </Text>
          <PrimaryAction>Masuk Gmail</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
