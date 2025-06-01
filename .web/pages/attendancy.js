/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect } from "react"
import { Button as RadixThemesButton, Checkbox as RadixThemesCheckbox, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Select as RadixThemesSelect, Table as RadixThemesTable, Text as RadixThemesText } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getRefValue, getRefValues, isTrue } from "$/utils/state"
import NextLink from "next/link"
import NextHead from "next/head"



export function Root_ee8b23b22a3d845d3f5e6be0fa9f64c7 () {
  
  
                useEffect(() => {
                    ((...args) => (addEvents([(Event("reflex___state____state.attendace_check___back_end___authentication____authentication.get_member", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_73cbc7c14860dcc27fdb1c7751f92a6c = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([], args, ({ ["preventDefault"] : true }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_73cbc7c14860dcc27fdb1c7751f92a6c}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesHeading align={"center"}>

{"Attending"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"\ub0a0\uc9dc"}
</RadixThemesText>
<Select__root_af5c1a9fadce878c65be1f86daaa4bfd/>
<RadixThemesText as={"p"}>

{"\ub144"}
</RadixThemesText>
<Select__root_fa85e883d0f980c0ece0ddfa2d03403e/>
<RadixThemesText as={"p"}>

{"\uc6d4"}
</RadixThemesText>
<Select__root_7103e6a6402513f554a9373bcb21e5df/>
<RadixThemesText as={"p"}>

{"\uc77c"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesTable.Root css={({ ["width"] : "100%" })}>

<RadixThemesTable.Header>

<RadixThemesTable.Row>

<RadixThemesTable.ColumnHeaderCell>

{"\uc21c\ubc88"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"\uc774\ub984"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"\uc0dd\ub144\uc6d4\uc77c"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"\uc131\ubcc4"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"\ubc88\ud638"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"\ucd9c\uc11d"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<Table__body_1c85df7eb94e830ec106355fcf2bb754/>
</RadixThemesTable.Root>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>

<Link_7224f177b6e0d75daf095941537966d4/>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesButton css={({ ["align"] : "center" })}>

{"\ub3cc\uc544\uac00\uae30"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<Fragment_2a9b631f91366ae90c86bb6db0a94cb3/>
<Fragment_b475f1dfab85fd25c5b97c4f39f80991/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Link_7224f177b6e0d75daf095941537966d4 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"}>

<RadixThemesButton onClick={((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (window["alert"]("\uc804\uc1a1\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."))), ["callback"] : null }), ({  })))], args, ({  }))))}>

{"\ucd9c\uacb0 \uacb0\uacfc \uc804\uc1a1"}
</RadixThemesButton>
</RadixThemesLink>
  )
}

export function Select__root_7103e6a6402513f554a9373bcb21e5df () {
  
  const reflex___state____state__attendace_check___view___attendancy___select__date = useContext(StateContexts.reflex___state____state__attendace_check___view___attendancy___select__date)





  
  return (
    <RadixThemesSelect.Root defaultValue={reflex___state____state__attendace_check___view___attendancy___select__date.dd} name={"day"}>

<RadixThemesSelect.Trigger/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"01"}>

{"01"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"02"}>

{"02"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"03"}>

{"03"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"04"}>

{"04"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"05"}>

{"05"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"06"}>

{"06"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"07"}>

{"07"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"08"}>

{"08"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"09"}>

{"09"}
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
  )
}

export function Table__body_1c85df7eb94e830ec106355fcf2bb754 () {
  
  const reflex___state____state__attendace_check___back_end___authentication____authentication = useContext(StateContexts.reflex___state____state__attendace_check___back_end___authentication____authentication)





  
  return (
    <RadixThemesTable.Body>

<>{ reflex___state____state__attendace_check___back_end___authentication____authentication.member_data.map((data, index) => (
  <RadixThemesTable.Row key={index}>

<RadixThemesTable.Cell>

{(index + 1)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{data.at(0)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{data.at(3)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{data.at(4)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{data.at(5)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

<RadixThemesText as={"label"} size={"2"}>

<RadixThemesFlex gap={"2"}>

<RadixThemesCheckbox name={(data.at(1)+"-box")} size={"2"}/>
{""}
</RadixThemesFlex>
</RadixThemesText>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}</>
</RadixThemesTable.Body>
  )
}

export function Fragment_2a9b631f91366ae90c86bb6db0a94cb3 () {
  
  const reflex___state____state__attendace_check___back_end___authentication____authentication = useContext(StateContexts.reflex___state____state__attendace_check___back_end___authentication____authentication)





  
  return (
    <Fragment>

{reflex___state____state__attendace_check___back_end___authentication____authentication.login_success ? (
  <Fragment>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/attending"} passHref={true}>

<RadixThemesButton>

{"\uad00\ub9ac\uc790 \ud398\uc774\uc9c0"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment>

<RadixThemesText as={"p"}>

{""}
</RadixThemesText>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_b475f1dfab85fd25c5b97c4f39f80991 () {
  
  const reflex___state____state__attendace_check___back_end___authentication____authentication = useContext(StateContexts.reflex___state____state__attendace_check___back_end___authentication____authentication)





  
  return (
    <Fragment>

{reflex___state____state__attendace_check___back_end___authentication____authentication.login_success ? (
  <Fragment>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/addmember"} passHref={true}>

<RadixThemesButton>

{"\uc2e0\uaddc\ud68c\uc6d0\ucd94\uac00"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment>

<RadixThemesText as={"p"}>

{""}
</RadixThemesText>
</Fragment>
)}
</Fragment>
  )
}

export function Select__root_af5c1a9fadce878c65be1f86daaa4bfd () {
  
  const reflex___state____state__attendace_check___view___attendancy___select__date = useContext(StateContexts.reflex___state____state__attendace_check___view___attendancy___select__date)





  
  return (
    <RadixThemesSelect.Root defaultValue={reflex___state____state__attendace_check___view___attendancy___select__date.yyyy} name={"year"}>

<RadixThemesSelect.Trigger/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"2024"}>

{"2024"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2025"}>

{"2025"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2026"}>

{"2026"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2027"}>

{"2027"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2028"}>

{"2028"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2029"}>

{"2029"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2030"}>

{"2030"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2031"}>

{"2031"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2032"}>

{"2032"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2033"}>

{"2033"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2034"}>

{"2034"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2035"}>

{"2035"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2036"}>

{"2036"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2037"}>

{"2037"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2038"}>

{"2038"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2039"}>

{"2039"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2040"}>

{"2040"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2041"}>

{"2041"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2042"}>

{"2042"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2043"}>

{"2043"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2044"}>

{"2044"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2045"}>

{"2045"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2046"}>

{"2046"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2047"}>

{"2047"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2048"}>

{"2048"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2049"}>

{"2049"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2050"}>

{"2050"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2051"}>

{"2051"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2052"}>

{"2052"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2053"}>

{"2053"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2054"}>

{"2054"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2055"}>

{"2055"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2056"}>

{"2056"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2057"}>

{"2057"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2058"}>

{"2058"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2059"}>

{"2059"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2060"}>

{"2060"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2061"}>

{"2061"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2062"}>

{"2062"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2063"}>

{"2063"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2064"}>

{"2064"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2065"}>

{"2065"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2066"}>

{"2066"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2067"}>

{"2067"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2068"}>

{"2068"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2069"}>

{"2069"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2070"}>

{"2070"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2071"}>

{"2071"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2072"}>

{"2072"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2073"}>

{"2073"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2074"}>

{"2074"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2075"}>

{"2075"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2076"}>

{"2076"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2077"}>

{"2077"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2078"}>

{"2078"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2079"}>

{"2079"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2080"}>

{"2080"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2081"}>

{"2081"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2082"}>

{"2082"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2083"}>

{"2083"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2084"}>

{"2084"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2085"}>

{"2085"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2086"}>

{"2086"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2087"}>

{"2087"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2088"}>

{"2088"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2089"}>

{"2089"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2090"}>

{"2090"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2091"}>

{"2091"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2092"}>

{"2092"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2093"}>

{"2093"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2094"}>

{"2094"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2095"}>

{"2095"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2096"}>

{"2096"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2097"}>

{"2097"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2098"}>

{"2098"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2099"}>

{"2099"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"2100"}>

{"2100"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  )
}

export function Select__root_fa85e883d0f980c0ece0ddfa2d03403e () {
  
  const reflex___state____state__attendace_check___view___attendancy___select__date = useContext(StateContexts.reflex___state____state__attendace_check___view___attendancy___select__date)





  
  return (
    <RadixThemesSelect.Root defaultValue={reflex___state____state__attendace_check___view___attendancy___select__date.mm} name={"month"}>

<RadixThemesSelect.Trigger/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"01"}>

{"01"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"02"}>

{"02"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"03"}>

{"03"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"04"}>

{"04"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"05"}>

{"05"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"06"}>

{"06"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"07"}>

{"07"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"08"}>

{"08"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"09"}>

{"09"}
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
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<Root_ee8b23b22a3d845d3f5e6be0fa9f64c7/>
</RadixThemesFlex>
</RadixThemesContainer>
<NextHead>

<title>

{"AttendaceCheck | Attendancy"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
