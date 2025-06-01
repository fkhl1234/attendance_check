/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button as RadixThemesButton, Card as RadixThemesCard, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Strong as RadixThemesStrong, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { EventLoopContext } from "$/utils/context"
import { Event, getRefValue, getRefValues } from "$/utils/state"
import NextHead from "next/head"



export function Root_bf78e9f497ef2acb8e739ed3ad55e7a0 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_a47f1260f4eab69cc6d5139c8d20cc0f = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.attendace_check___back_end___authentication____authentication.login_handler", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_a47f1260f4eab69cc6d5139c8d20cc0f}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"4"}>

<RadixThemesText as={"p"} css={({ ["textAlign"] : "left", ["width"] : "100%" })} size={"6"} weight={"medium"}>

{"ID"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} name={"memberid"} placeholder={"ID"} required={true} size={"3"}/>
<RadixThemesText as={"p"} size={"6"} weight={"medium"}>

{"PW"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} name={"password"} placeholder={"PW"} required={true} size={"3"} type={"password"}/>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} justify={"center"} gap={"3"}>

<RadixThemesButton css={({ ["width"] : "100%" })} size={"3"}>

{"\ub85c\uadf8\uc778"}
</RadixThemesButton>
<RadixThemesDialog.Root>

<RadixThemesDialog.Trigger>

<RadixThemesButton css={({ ["width"] : "100%" })} size={"3"}>

{"\ud68c\uc6d0\uc870\ud68c"}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
<RadixThemesDialog.Content css={({ ["textAlign"] : "center", ["maxWidth"] : "25%", ["width"] : "100%" })}>

<RadixThemesDialog.Title css={({ ["marginBottom"] : "3%" })}>

{"\ud68c\uc6d0\uc870\ud68c"}
</RadixThemesDialog.Title>
<RadixThemesDialog.Description css={({ ["marginBottom"] : "3%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "80%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesText as={"p"}>

<RadixThemesStrong>

{"\uc774\ub984 : "}
</RadixThemesStrong>
</RadixThemesText>
<RadixThemesTextField.Root type={"member_query_name"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesText as={"p"}>

<RadixThemesStrong>

{"\uc0dd\ub144\uc6d4\uc77c : "}
</RadixThemesStrong>
</RadixThemesText>
<RadixThemesTextField.Root type={"member_query_birth"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesText as={"p"}>

<RadixThemesStrong>

{"\uc804\ud654\ubc88\ud638 : "}
</RadixThemesStrong>
</RadixThemesText>
<RadixThemesTextField.Root type={"member_query_phone_number"}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Description>
<RadixThemesFlex css={({ ["width"] : "100%" })} justify={"end"} gap={"3"}>

<RadixThemesDialog.Close>

<RadixThemesButton size={"3"}>

{"\ucc3e\uae30"}
</RadixThemesButton>
</RadixThemesDialog.Close>
<RadixThemesDialog.Close>

<RadixThemesButton size={"3"}>

{"\ub2eb\uae30"}
</RadixThemesButton>
</RadixThemesDialog.Close>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100vw", ["height"] : "100vh" })}>

<RadixThemesCard css={({ ["maxWidth"] : "25%", ["width"] : "100%", ["maxHeight"] : "30%", ["height"] : "100%" })} size={"4"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesHeading as={"h1"} css={({ ["textAlign"] : "center", ["width"] : "100%" })} size={"9"}>

{"Login"}
</RadixThemesHeading>
</RadixThemesFlex>
<Root_bf78e9f497ef2acb8e739ed3ad55e7a0/>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
<NextHead>

<title>

{"login"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
