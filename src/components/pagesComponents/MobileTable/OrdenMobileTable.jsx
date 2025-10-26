import React from "react";
import { Box, HStack, Badge, IconButton, Stack, Text } from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const formatPrice = (v) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(v || 0);

export function OrdenMobileTable ({ ordenes = [], onEdit, onDelete }) {
  return (
    <Stack gap={3}>
      {ordenes?.map((p) => (
        <Box key={p._id} borderWidth="1px" borderRadius="xl" bg="white" p={3}>
          <Stack gap={1}>
            <HStack justify="space-between" align="start">
              <Text fontWeight="bold" noOfLines={1}>
                {p.nombre}
              </Text>
              <Badge colorScheme="purple" flexShrink={0}>
                {p.categoria || "General"}
              </Badge>
            </HStack>

            <Text fontSize="sm" color="sand.700">
              ID: {p._id}
            </Text>

            <HStack justify="space-between" mt={1}>
              <Text fontWeight="semibold">{formatPrice(p.precio)}</Text>
              <Text fontSize="sm" color={p.stock > 0 ? "green.600" : "red.600"}>
                {p.stock ?? 0} en stock
              </Text>
            </HStack>

            {(onEdit || onDelete) && (
              <HStack justify="flex-end" gap={2} mt={2}>
                {onEdit && (
                  <IconButton
                    aria-label="Editar"
                    size="xs"
                    variant="subtle"
                    onClick={() => onEdit(p)}
                  >
                    <FiEdit />
                  </IconButton>
                )}
                {onDelete && (
                  <IconButton
                    aria-label="Eliminar"
                    size="xs"
                    variant="subtle"
                    colorPalette="red"
                    onClick={() => onDelete(p)}
                  >
                    <FiTrash2 />
                  </IconButton>
                )}
              </HStack>
            )}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}