export class Product
{
	    id: number;
		name: string;
		type: string;
		category: string;
		manufacturer: string;
	
	Product(){}
	public constructor(
		id?: number,
		name?: string,
		type?: string,
		category?: string,
		manufacturer?: string)
	{
		this.id=id;
		this.name=name;
		this.type=type;
		this.category=category;
		this.manufacturer=manufacturer;
	}
}