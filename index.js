const {Telegraf}=require('telegraf');
const bot = new Telegraf('2126623375:AAFzW7h2rn2R0f0fw10N8abcR7soMq1nwjc')



bot.start((ctx)=>{
    ctx.reply('Just add me as an admin in your group')
})



bot.on('message',(ctx)=>{
    if(ctx.message.left_chat_member || ctx.message.new_chat_member){
     bot.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
    
    }
 
 })

 bot.launch();