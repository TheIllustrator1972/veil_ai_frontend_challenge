import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SourceIcon } from "./helpers";
import { promptListStyles as classes } from "./styles";

interface PromptsListProps {
  filteredPrompts: any[];
  handleQueryClick: (prompt: any) => void;
}

const PromptsList = (props: PromptsListProps) => {
  const { filteredPrompts, handleQueryClick } = props;

  return (
    <div className={classes.tableContainer}>
      <Table>
        <TableHeader className={classes.tableHeader}>
          <TableRow className={classes.py2}>
            <TableHead className={classes.headerRows.prompts}>
              Prompts
            </TableHead>
            <TableHead className={classes.headerRows.source}>Source</TableHead>
            <TableHead className={classes.headerRows.persona}>
              Persona
            </TableHead>
            <TableHead className={classes.headerRows.location}>
              Location
            </TableHead>
            <TableHead className={classes.headerRows.averagePosition}>
              Average Position
            </TableHead>
            <TableHead className={classes.headerRows.actions}>
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {filteredPrompts.map((prompt) => (
            <TableRow
              key={prompt.id}
              className={classes.promptRow}
              onClick={() => handleQueryClick(prompt)}
            >
              <TableCell className={classes.promptText}>
                {prompt.text}
              </TableCell>
              <TableCell>
                <SourceIcon source={prompt.source} />
              </TableCell>
              <TableCell>
                <div className={classes.personasContainer}>
                  {prompt.personas.map((persona: string, idx: number) => (
                    <Badge key={idx} variant="coral">
                      {persona}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className={classes.badgeContainer}>
                  <Badge variant="shadow" className={classes.smallMediumText}>
                    {prompt.location.city}
                  </Badge>

                  <Badge variant="coral" className={classes.smallMediumText}>
                    {prompt.location.country}
                  </Badge>
                </div>
              </TableCell>
              <TableCell className={classes.rightMediumText}>
                {prompt.position}
              </TableCell>
              <TableCell
                className={classes.deleteCell}
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="default"
                  className={classes.deleteButton}
                >
                  <Trash2 className={classes.size4} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PromptsList;
