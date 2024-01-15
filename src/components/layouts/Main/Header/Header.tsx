import Button from "@/components/common/Button/Button";
import React from "react";

// import { VscSymbolColor } from "react-icons/vsc";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";

import * as Style from "./index.styled";
import Link from "next/link";
import { PassThrough } from "stream";
type HeaderProps = {
  switchTheme: () => void;
};
const handleButtonClick = () => {
  // Ничего не делаем
};
const Header: React.FC<HeaderProps> = (props) => {
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
          Главная
        </Style.Text>
        <Style.Text>
          Фильмы
        </Style.Text>
        <Style.Text>
          Сериалы
        </Style.Text>
        <a href="https://translated.turbopages.org/proxy_u/en-ru.ru.225a4530-65a4f8be-f151dc47-74722d776562/https/www.imdb.com/list/ls080556918/" target="_blank">
        <Style.Text>
          Лучшие актеры
        </Style.Text>
        </a>
        <a href="https://exler.ru/films/?page=2&ysclid=lrepv6353t414721522" target="_blank">
        <Style.Text>
          Рецензии
        </Style.Text>
        </a>
        <Style.Subscribe_button>Подписаться</Style.Subscribe_button>
        
    
        <a href="https://zippy-dasik-dfa28f.netlify.app" target="_blank">
        <Style.Buttons>
          <Button
            name={<IoMdPerson />}
            action={handleButtonClick}
          />
        </Style.Buttons>
        </a>

        <Style.Buttons>
          <Button
            name={<LuSunMoon />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>

        

      </Style.Content>
    </Style.Header>
  );
};
export default Header;
