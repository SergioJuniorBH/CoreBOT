const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'buy',
    category: 'economy',
    description: 'Buy some item',
    aliases: ['comprar'],
    run: async (bot, message, args) => {
        let purchase = args.join(" ");
        if(!purchase) {
            return message.channel.send('<a:no:766016144720396389> | Você não especificou o item que você quer comprar.')
        }

        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`);

        if(purchase === "Carro de corrida") {
            if(amount < 4000) {
                return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
            }

            db.subtract(`money_${message.guild.id}_${message.author.id}`, 4000);
            db.push(message.author.id, ":race_car: **- Carro de corrida**")
            message.channel.send('<a:yes:766016055855284274> | Carro de corrida foi adicionado com sucesso em seu inventário.')
        };

        if(purchase === "Carro simples") {
            if(amount < 2300) {
                return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
            }

            db.subtract(`money_${message.guild.id}_${message.author.id}`, 2300);
            db.push(message.author.id, ":red_car: **- Carro simples**")
            message.channel.send('<a:yes:766016055855284274> | Carro simples foi adicionado com sucesso em seu inventário.')
    };

    if(purchase === "Van") {
        if(amount < 2000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 2000);
        db.push(message.author.id, ":minibus: **- Van**")
        message.channel.send('<a:yes:766016055855284274> | Van foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Combe") {
        if(amount < 1800) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 1800);
        db.push(message.author.id, ":bus: **- Combe**")
        message.channel.send('<a:yes:766016055855284274> | Combe foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Moto de corrida") {
        if(amount < 2800) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 2800);
        db.push(message.author.id, ":motorcycle: **- Moto de corrida**")
        message.channel.send('<a:yes:766016055855284274> | Moto de Corrida foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Motinha") {
        if(amount < 1300) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 1300);
        db.push(message.author.id, ":motor_scooter: **- Motinha**")
        message.channel.send('<a:yes:766016055855284274> | Motinha foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Bicicleta") {
        if(amount < 500) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
        db.push(message.author.id, ":bike: **- Bicicleta**")
        message.channel.send('<a:yes:766016055855284274> | Bicicleta foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Arco e flecha") {
        if(amount < 3000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 3000);
        db.push(message.author.id, ":bow_and_arrow: **- Arco e flecha**")
        message.channel.send('<a:yes:766016055855284274> | Arco e flecha foi adicionado com sucesso em seu inventário.')
    };

    if(purchase === "Faca") {
        if(amount < 1500) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 1500);
        db.push(message.author.id, "<:knife:773271765127659561> **- Faca**")
        message.channel.send('<a:yes:766016055855284274> | Faca foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Adaga") {
        if(amount < 1000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
        db.push(message.author.id, "<:faca_das_galaxias:773271765563867156> **- Adaga**")
        message.channel.send('<a:yes:766016055855284274> | Adaga foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Espada") {
        if(amount < 2600) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 2600);
        db.push(message.author.id, "<:espada_sombria:773271765371715590> **- Espada**")
        message.channel.send('<a:yes:766016055855284274> | Espada foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Pistola") {
        if(amount < 6000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 6000);
        db.push(message.author.id, "<:glock:773271765228585013> **- Pistola**")
        message.channel.send('<a:yes:766016055855284274> | Pistola foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Escopeta") {
        if(amount < 8000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 8000);
        db.push(message.author.id, "<:4035_Shotgun:773273479553876018> **- Escopeta**")
        message.channel.send('<a:yes:766016055855284274> | Escopeta foi adicionada com sucesso em seu inventário.')
    };

    if(purchase === "Castelo") {
        if(amount < 30000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar esta propriedade.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 30000);
        db.push(message.author.id, ":european_castle: **- Castelo**")
        message.channel.send('<a:yes:766016055855284274> | Castelo foi adicionado com sucesso em seu inventário e na sua lista de propriedades.')
    };

    if(purchase === "Escritório da empresa 'Core'") {
        if(amount < 24000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar esta propriedade.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 24000);
        db.push(message.author.id, "<:office:773276082265653288> **- Escritório da empresa 'Core'**")
        message.channel.send("<a:yes:766016055855284274> | Escritório da empresa 'Core' foi adicionado com sucesso em seu inventário .")
    };

    if(purchase === "Hospital 'Rettet Leben'") {
        if(amount < 29000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar esta propriedade.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 29000);
        db.push(message.author.id, ":hospital: **- Hospital 'Rettet Leben'**")
        message.channel.send("<a:yes:766016055855284274> | Hospital 'Rettet Leben' foi adicionado com sucesso em seu inventário.")
    };

    if(purchase === "Hotel 'Liebe'") {
        if(amount < 15000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar esta propriedade.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 15000);
        db.push(message.author.id, ":hotel: **- Hotel 'Liebe'**")
        message.channel.send("<a:yes:766016055855284274> | Hotel 'Liebe' foi adicionado com sucesso em seu inventário.")
    };

    if(purchase === "Usina elétrica") {
        if(amount < 12000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar esta propriedade.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 12000);
        db.push(message.author.id, ":factory: **- Usina elétrica**")
        message.channel.send("<a:yes:766016055855284274> | Usina elétrica foi adicionada com sucesso em seu inventário.")
    };

    if(purchase === "Casa") {
        if(amount < 10000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar esta propriedade.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 10000);
        db.push(message.author.id, ":house: **- Casa**")
        message.channel.send("<a:yes:766016055855284274> | Casa foi adicionada com sucesso em seu inventário.")
    };

    if(purchase === "Apartamento") {
        if(amount < 13000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar esta propriedade.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 13000);
        db.push(message.author.id, ":office: **- Apartamento**")
        message.channel.send("<a:yes:766016055855284274> | Apartamento foi adicionado com sucesso em seu inventário.")
    };

    if(purchase === "Cartas de Uno") {
        if(amount < 25) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 25);
        db.push(message.author.id, "<:5676_katiaureverse:773280369016700950> **- Cartas de Uno**")
        message.channel.send("<a:yes:766016055855284274> | Cartas de Uno foram adicionadas com sucesso em seu inventário.")
    };

    if(purchase === "Cartas de Pókemon") {
        if(amount < 15) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 15);
        db.push(message.author.id, ":black_joker: **- Cartas de Pókemon**")
        message.channel.send("<a:yes:766016055855284274> | Cartas de Pókemon foram adicionadas com sucesso em seu inventário.")
    };

    if(purchase === "Cartas de Yu-Gi-Oh") {
        if(amount < 15) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 15);
        db.push(message.author.id, ":black_joker: **- Cartas de Yu-Gi-Oh**")
        message.channel.send("<a:yes:766016055855284274> | Cartas de Yu-Gi-Oh foram adicionadas com sucesso em seu inventário.")
    };

    if(purchase === "Celular CPhone") {
        if(amount < 800) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 800);
        db.push(message.author.id, "<:5476_Smartphone:773282794113466389> **- Celular CPhone**")
        message.channel.send("<a:yes:766016055855284274> | Celular CPhone foi adicionado com sucesso em seu inventário.")
    };

    if(purchase === "Computador CMac") {
        if(amount < 2000) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 2000);
        db.push(message.author.id, "<:computer_bsod:773283451348582411> **- Computador CMac**")
        message.channel.send("<a:yes:766016055855284274> | Computador CMac foi adicionado com sucesso em seu inventário.")
    };

    if(purchase === "Videogame CStation") {
        if(amount < 2500) {
            return message.channel.send('<:Discord_Coin:773288020622180352> | Você não tem dinheiro suficiente para comprar este item.')
        }

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 2500);
        db.push(message.author.id, "joystick: **- Videogame CStation**")
        message.channel.send("<a:yes:766016055855284274> | Videogame CStation foi adicionado com sucesso em seu inventário.")
    };
  }
}