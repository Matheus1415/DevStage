'use client'
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link} from "lucide-react";
import { IconButton } from "@/components/icon-button";
import { InviteLinkProps } from "@/interface/inviteLink";
export function InviteLinkInput({inviteLink}:InviteLinkProps){

  function copyInviteLink(){
    navigator.clipboard.writeText(inviteLink)
  }

    return(
        <InputRoot>
        <InputIcon>
          <Link />
        </InputIcon>
        <InputField
          readOnly
          type="text"
          defaultValue={inviteLink}
        />
        <IconButton className="-mr-2">
          <Copy className="size-5" onClick={copyInviteLink} />
        </IconButton>
      </InputRoot>
    )
}