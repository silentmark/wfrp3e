export class WfrpCharacter extends Actor {

    get careers():Item[] {
        return this.items.filter(x=>x.type === "career");
    }
}
