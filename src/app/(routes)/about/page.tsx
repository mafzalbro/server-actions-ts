
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface AboutProps {
  searchParams: {
    city: string,
    home: string,
    index: string
  }
}

const AboutPage = ({searchParams: {city, home, index}}: AboutProps) => {

  const table = [
    {
      "home": "bhobhtian",
      "city": "Lahore"
    },
    {
      "home": "shershah",
      "city": "Lahore"
    },
    {
      "home": "defence",
      "city": "Karachi"
    },
    {
      "home": "gulberg",
      "city": "Lahore"
    },
    {
      "home": "f-7",
      "city": "Islamabad"
    },
    {
      "home": "clifton",
      "city": "Karachi"
    },
    {
      "home": "model town",
      "city": "Lahore"
    },
    {
      "home": "g-13",
      "city": "Islamabad"
    },
    {
      "home": "saddar",
      "city": "Karachi"
    },
    {
      "home": "westridge",
      "city": "Rawalpindi"
    }
  ]
  ;

  return (
    <>
    <div className="mb-20">
    <h2 className="text-3xl mb-4 inline-block">Practice of Link and searchParams in NextJS</h2>
    <p>Click any table entry and see it got highlighted and search paramters added in URL!</p>
    </div>
      <Table>
        <TableCaption>A list of user addresses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Sr.</TableHead>
            <TableHead>Home</TableHead>
            <TableHead>City</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {table.map((row, i) => {              
                    return <TableRow key={row.home + i}>
                        <TableCell className={`${(i === parseInt(index)) ? 'bg-black text-white' : ''}`}>
                          {i}
                          </TableCell>
                        <TableCell className={`${(home == row.home && i === parseInt(index)) ? 'bg-black text-white' : ''}`}>
                          <Link href={{
                            pathname: '/about',
                            query: {home: row.home, index: i}
                          }} passHref className="block w-full h-full">
                          {row.home}
                          </Link>
                          </TableCell>
                        <TableCell className={`${(city == row.city &&  i === parseInt(index)) ? 'bg-black text-white' : ''}`}>
                        <Link href={{
                            pathname: '/about',
                            query: {city: row.city, index: i}
                          }} passHref className="block w-full h-full">
                          {row.city}
                          </Link>
                          </TableCell>
                    </TableRow>
                })}
        </TableBody>
      </Table>
    </>
  );
};

export default AboutPage;
