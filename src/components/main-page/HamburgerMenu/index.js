import React, { useRef, useState, useEffect} from 'react'
import {TimelineMax} from "gsap"
import * as S from "./styled"
import links from "../../content"

const HamburgerMenu = () => {

    let wrapper = useRef(null)
    let lineOne = useRef(null)
    let lineTwo = useRef(null)
    let lineThree = useRef(null)
    let menuItems = useRef([])
    menuItems.current = []

    const addToMenuItems = (el) => {
        if (el && !menuItems.current.includes(el)) {
          menuItems.current.push(el)
        }
    }

    let timeline = useRef()
    //let timeline = useState(new TimelineMax({paused: true})) //Outra possibilidade
    const [menuExpanded, setMenuExpanded] = React.useState(false)

    useEffect(()=>{
        timeline.current = new TimelineMax({paused: true})
        .to(wrapper.current, 1.6, {
            top: "0%",
            ease: "power3"
        }, 0)
        .to(lineOne.current, 0.8, {
            y: 16,
            rotation: 45,
            ease: "power3"
        }, 0)
        .to(lineThree.current, 0.8, {
            y: -16,
            rotation: -45,
            ease: "power3",
        }, 0)
        .to(lineTwo.current, 0, { 
            autoAlpha: 0,
            ease: "power3"
        }, 0)
        .staggerFrom(menuItems.current, 1, {x: -200, opacity: 0, ease: "power3"}, 0.1)
        .reverse()
        
    },[])

    useEffect(() => {
        //timeline.current.reversed(!menuExpanded) //Outra possibilidade
        menuExpanded === true ? timeline.current.play() : timeline.current.reverse();
    },[menuExpanded])    

    return (
        <>
            <S.HamburgerMenuToggleBtn onClick={() => setMenuExpanded(!menuExpanded)}>
                <S.Top ref={lineOne}></S.Top>
                <S.Middle ref={lineTwo}></S.Middle>
                <S.Bottom ref={lineThree}></S.Bottom>
            </S.HamburgerMenuToggleBtn>

            <S.HamburgerMenuWrapper ref={wrapper}>
                <S.HamburgerMenuData>
                    <S.HamburgerMenuList>
                            <S.HamburgerMenuItem>Navegação</S.HamburgerMenuItem>
                            {links.map((link, index) => (
                                <S.HamburgerMenuItem key={index} ref={addToMenuItems}>
                                <S.HamburgerMenuLink to={link.url}>
                                    {link.label}
                                </S.HamburgerMenuLink>
                                </S.HamburgerMenuItem>
                            ))}
                    </S.HamburgerMenuList>
                </S.HamburgerMenuData>
            </S.HamburgerMenuWrapper>
        </>
    )
}

export default HamburgerMenu

