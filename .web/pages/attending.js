/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Checkbox as RadixThemesCheckbox, Container as RadixThemesContainer, Flex as RadixThemesFlex, Table as RadixThemesTable, Text as RadixThemesText } from "@radix-ui/themes"
import { StateContexts } from "$/utils/context"
import NextHead from "next/head"



export function Table__body_c3b6dc51aebbc01f5e252da149090add () {
  
  const reflex___state____state__attendace_check___view___attending____send_attending = useContext(StateContexts.reflex___state____state__attendace_check___view___attending____send_attending)





  
  return (
    <RadixThemesTable.Body>

<>{ reflex___state____state__attendace_check___view___attending____send_attending.member_data.map((data, index_2ee8fd1d4e7e0e27) => (
  <RadixThemesTable.Row key={index_2ee8fd1d4e7e0e27}>

<RadixThemesTable.Cell>

{data.at(1)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{data.at(5)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{data.at(7)}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

<RadixThemesText as={"label"} size={"2"}>

<RadixThemesFlex gap={"2"}>

<RadixThemesCheckbox name={(data.at(2)+"-box")} size={"2"}/>
{""}
</RadixThemesFlex>
</RadixThemesText>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}</>
</RadixThemesTable.Body>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesTable.Root css={({ ["width"] : "100%" })}>

<RadixThemesTable.Header>

<RadixThemesTable.Row>

<RadixThemesTable.ColumnHeaderCell>

{"\uc774\ub984"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"\uc131\ubcc4"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"\ucd9c\uc11d\ud604\ud669"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<Table__body_c3b6dc51aebbc01f5e252da149090add/>
</RadixThemesTable.Root>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesContainer>
<NextHead>

<title>

{"AttendaceCheck | Attending"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
