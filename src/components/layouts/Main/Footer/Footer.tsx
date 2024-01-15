import Button from "@/components/common/Button/Button";
import React from "react";

import { TfiYoutube } from "react-icons/tfi";
import { FaDiscord } from "react-icons/fa";
import { IoLogoVk } from "react-icons/io";

// import { VscSymbolColor } from "react-icons/vsc";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

import * as Style from "./index.styled";
import Link from "next/link";
import { PassThrough } from "stream";
type HeaderProps = {
  switchTheme: () => void;
};
const handleButtonClick = () => {
  // Ничего не делаем
};
const Footer: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
      
        <Style.Logo>
          <Style.Img src="https://cdn.icon-icons.com/icons2/390/PNG/128/magic-swirl_38219.png">
            {/* <Link href={"/"}></Link> */}
          </Style.Img>
          <Style.Name >КиноMAGIC Лучшие фильмы
          </Style.Name>
        </Style.Logo>
        <Style.Text>
          Лицензия
        </Style.Text>
      
        <Style.Text>
          Поддержка
        </Style.Text>
        <Style.Text>
          Связаться с нами
        </Style.Text>
        <Style.Container>
          <Style.Img src="http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/01/2.png">
          </Style.Img>
          
          <Style.Img src="http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/01/1.png">
          </Style.Img>

        </Style.Container>
        
        
        <a href="https://www.youtube.com/channel/UCs6hvxhMIuD4S_jMO5v0n1w" target="_blank">
        <Style.Buttons>
          <Button
            name={<TfiYoutube />}
            action={handleButtonClick}
          />
        </Style.Buttons>
        </a>
     
        <a href="https://discord.gg/A5zpvHST" target="_blank">
        <Style.Buttons>
          <Button
            name={<FaDiscord />}
            action={handleButtonClick}
          />
        </Style.Buttons>
</a>

        <a href="https://vk.com/dygonright2002" target="_blank">
        <Style.Buttons>
          <Button
            name={<IoLogoVk />}
            action={handleButtonClick}
          />
        </Style.Buttons>
        </a>
        

      </Style.Content>
      
    </Style.Header>
  );
};
export default Footer;
