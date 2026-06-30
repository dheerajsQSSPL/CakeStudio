import AccountSettings from "../../components/MyAccount/AccountSettings/AccountSettings"
import MyAccountLayout from "../../components/MyAccount/MyAccountLayout"
export default function AccountSetting(props) {
    return (
        <>
            <MyAccountLayout>
                <AccountSettings {...props} />
            </MyAccountLayout>
        </>
    )
}