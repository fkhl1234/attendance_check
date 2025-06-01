/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Select as RadixThemesSelect, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { EventLoopContext } from "$/utils/context"
import { Event, getRefValue, getRefValues } from "$/utils/state"
import NextHead from "next/head"



export function Button_7f628b7417b554cf317c10b9bc5a4cb6 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_c7638fd8f491a8c39a72a31d2b6f3509 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/attendancy", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton onClick={on_click_c7638fd8f491a8c39a72a31d2b6f3509} type={"button"}>

{"\ub2eb\uae30"}
</RadixThemesButton>
  )
}

export function Root_97422ff9483edf2cbe9b1e2d152c5e78 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_6f7d342d24b0ae9f1261fcd805309c2d = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.attendace_check___view___addmember____add_member.add_member", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_6f7d342d24b0ae9f1261fcd805309c2d}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"\uc774\ub984 : "}
</RadixThemesText>
<RadixThemesTextField.Root name={"member_name"} placeholder={"\uc608) \ud64d\uae38\ub3d9"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"ID : "}
</RadixThemesText>
<RadixThemesTextField.Root name={"member_ID"} placeholder={"ID"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"PW : "}
</RadixThemesText>
<RadixThemesTextField.Root name={"member_PW"} placeholder={"PW"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"\uc0dd\ub144\uc6d4\uc77c : "}
</RadixThemesText>
<RadixThemesSelect.Root name={"year"}>

<RadixThemesSelect.Trigger/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"1971"}>

{"1971"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1972"}>

{"1972"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1973"}>

{"1973"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1974"}>

{"1974"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1975"}>

{"1975"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1976"}>

{"1976"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1977"}>

{"1977"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1978"}>

{"1978"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1979"}>

{"1979"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1980"}>

{"1980"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1981"}>

{"1981"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1982"}>

{"1982"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1983"}>

{"1983"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1984"}>

{"1984"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1985"}>

{"1985"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1986"}>

{"1986"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1987"}>

{"1987"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1988"}>

{"1988"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1989"}>

{"1989"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1990"}>

{"1990"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1991"}>

{"1991"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1992"}>

{"1992"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1993"}>

{"1993"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1994"}>

{"1994"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1995"}>

{"1995"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1996"}>

{"1996"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1997"}>

{"1997"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1998"}>

{"1998"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"1999"}>

{"1999"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2000"}>

{"2000"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2001"}>

{"2001"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2002"}>

{"2002"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2003"}>

{"2003"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2004"}>

{"2004"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2005"}>

{"2005"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2006"}>

{"2006"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2007"}>

{"2007"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2008"}>

{"2008"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2009"}>

{"2009"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2010"}>

{"2010"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
<RadixThemesText as={"p"}>

{"\ub144"}
</RadixThemesText>
<RadixThemesSelect.Root name={"month"}>

<RadixThemesSelect.Trigger/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"1"}>

{"1"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2"}>

{"2"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"3"}>

{"3"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"4"}>

{"4"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"5"}>

{"5"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"6"}>

{"6"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"7"}>

{"7"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"8"}>

{"8"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"9"}>

{"9"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"10"}>

{"10"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"11"}>

{"11"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"12"}>

{"12"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
<RadixThemesText as={"p"}>

{"\uc6d4"}
</RadixThemesText>
<RadixThemesSelect.Root name={"day"}>

<RadixThemesSelect.Trigger/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"1"}>

{"1"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2"}>

{"2"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"3"}>

{"3"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"4"}>

{"4"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"5"}>

{"5"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"6"}>

{"6"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"7"}>

{"7"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"8"}>

{"8"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"9"}>

{"9"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"10"}>

{"10"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"11"}>

{"11"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"12"}>

{"12"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"13"}>

{"13"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"14"}>

{"14"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"15"}>

{"15"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"16"}>

{"16"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"17"}>

{"17"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"18"}>

{"18"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"19"}>

{"19"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"20"}>

{"20"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"21"}>

{"21"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"22"}>

{"22"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"23"}>

{"23"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"24"}>

{"24"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"25"}>

{"25"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"26"}>

{"26"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"27"}>

{"27"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"28"}>

{"28"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"29"}>

{"29"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"30"}>

{"30"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"31"}>

{"31"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
<RadixThemesText as={"p"}>

{"\uc77c"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"\uc131\ubcc4 : "}
</RadixThemesText>
<RadixThemesSelect.Root name={"member_sex"}>

<RadixThemesSelect.Trigger/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"\ub0a8"}>

{"\ub0a8"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"\uc5ec"}>

{"\uc5ec"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"\uc804\ud654\ubc88\ud638 : "}
</RadixThemesText>
<RadixThemesTextField.Root name={"member_phone_number"} placeholder={"010-0000-0000"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesButton type={"submit"}>

{"\uc81c\ucd9c"}
</RadixThemesButton>
<Button_7f628b7417b554cf317c10b9bc5a4cb6/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh" })} gap={"3"}>

<RadixThemesCard>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesHeading as={"h2"} css={({ ["textAlign"] : "center", ["width"] : "100%" })} size={"6"}>

{"\uc2e0\uaddc \uc778\uc6d0"}
</RadixThemesHeading>
</RadixThemesFlex>
<Root_97422ff9483edf2cbe9b1e2d152c5e78/>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
<NextHead>

<title>

{"AttendaceCheck | Addmember"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
