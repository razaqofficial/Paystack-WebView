import React, { useEffect, useRef } from 'react'
import ReactNativePaystackWebviewModule, { Paystack , paystackProps} from 'react-native-paystack-webview'
import { TouchableOpacity, Text, View } from 'react-native'


const App = () => {
  useEffect(() => {
    console.log(ReactNativePaystackWebviewModule)
  })

  const paystackWebViewRef = useRef<paystackProps.PayStackRef>(); 

  return (
    <View style={{justifyContent:'center', backgroundColor:'red', flex:1}}>
      <Paystack
        paystackKey={'your-paystack-key-here'}
        onCancel={() => { }}
        onSuccess={() => { }}
        billingEmail={'your-email-here'}
        billingName={'your-name-here'}
        amount={'700.90'}
        ref={paystackWebViewRef}
        autoStart={true}
        metadataDevice={'mobile'}
        metadataAction={'ticket_purchase'} //Other action is gift_voucher_purchase
        metadataEventPrice={'event-price-id'} // required If action is ticket_purchase
        metadataTicketQuantity={'5'} // required If action is ticket_purchase
        metadataReceiverEmail={'razaq@example.com'} // required If action is gift_voucher_purchase
      />

      <TouchableOpacity onPress={() => paystackWebViewRef.current?.startTransaction()}>
        <Text>Pay Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
